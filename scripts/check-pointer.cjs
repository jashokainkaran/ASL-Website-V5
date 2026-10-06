/* eslint-disable @typescript-eslint/no-require-imports -- Standalone TypeScript require hook. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,filename);
const {PointerInput,POINTER_SAMPLES}=require('../src/particles/interaction/PointerInput.ts');
const {resolvePointerProfile,pointerProfiles}=require('../src/particles/interaction/profiles.ts');

const input=new PointerInput();
input.move(100,50,1,false);
for(let i=0;i<120;i++)input.update(1+i/60,.25);
assert.equal(input.samples.filter(s=>s.w>0).length,1,'Stationary input must not accumulate repeated forces');
for(let i=0;i<100;i++){const t=3+i/60;input.move(100+i*100,50,t,false);input.update(t,.25);}
assert.equal(input.samples.length,POINTER_SAMPLES,'History remains bounded regardless of event count');
assert.ok(input.samples.every(s=>s.w<=1.25),'Fast input must remain bounded');
assert.ok(input.velocities.every(v=>Math.hypot(v.x,v.y)<=1.00001),'Directional velocity must be clamped');
input.release(5);
const released=input.samples.map(s=>s.toArray());
input.update(6,.25);
assert.deepEqual(input.samples.map(s=>s.toArray()),released,'Released history must expire, never refresh indefinitely');
input.clear();assert.ok(input.samples.every(s=>s.w===0),'Disabling interaction clears stale impulses');

const touch=new PointerInput();touch.move(0,0,10,true);touch.release(10.001);
assert.ok(touch.samples.some(s=>s.w>0&&s.w<1),'A tap finishing between frames still produces a restrained impulse');
assert.ok(touch.velocities.some(v=>v.z>1),'Touch radius is larger than mouse radius');

for(const p of [.104,.2184,.2548,.3744,.4212,.494,.52,.59,.61,.67,.69,.75,.77,.84,.86,.91,.92,.99]){
 const before=resolvePointerProfile(p-.000001,{}),after=resolvePointerProfile(p+.000001,{});
 for(const key of ['radius','strength','depth','recovery'])assert.ok(Math.abs(after[key]-before[key])<.001,'State interaction must blend continuously');
}
assert.ok(pointerProfiles.cloud.strength>pointerProfiles.filaments.strength,'Cloud must carve more strongly than filaments');
for(const profile of Object.values(pointerProfiles)){
 const recovery95=4.744/(10*profile.recovery);
 assert.ok(recovery95>=.35&&recovery95<=.7,'Default 95% recovery must fit the perceived recovery window');
}
console.log('Pointer history, stationary stability, clamped velocity, touch tap, smooth state blends and recovery windows passed');
