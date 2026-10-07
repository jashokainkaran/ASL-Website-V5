/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS harness installs a local TypeScript require hook. */
// CPU invariants for the GPU formation inputs; no browser or new test dependency.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText, filename);
};
const {makeGeometry} = require('../src/particles/engine/geometry.ts');
const {getASLMarkPoints} = require('../src/particles/logo/path.ts');
const {tuning} = require('../src/lib/scene-store.ts');
for (const count of [18000, 40000, 60000]) {
  const {geometry, targets} = makeGeometry(count, {...tuning, width:18.47, height:11.547});
  for (const [name, points] of Object.entries(targets)) {
    assert.equal(points.length, count * 3, name);
    assert.ok(points.every(Number.isFinite), `${name} contains non-finite coordinates`);
  }
  assert.equal(targets.final, targets.logo, 'Final must reuse the logo buffer');
  assert.ok(Object.keys(geometry.attributes).length + 2 <= 16, 'Vertex attribute budget exceeded including Three normal/uv declarations');
  assert.deepEqual(getASLMarkPoints(count), getASLMarkPoints(count), 'Logo sampling must be deterministic');
  geometry.dispose();
  console.log(`${count}: all formation sizes, finite coordinates, deterministic identity and buffer reuse passed`);
}
assert.equal(getASLMarkPoints(0).length, 0);
assert.ok(getASLMarkPoints(1).every(Number.isFinite));

const {capabilitySystem,capabilityTuning}=require('../src/particles/formations/capability-systems.ts');
for(const width of [18.47,5.34]) {
 const context={...tuning,width,height:11.547};
 for(let state=0;state<4;state++) {
  const target=capabilitySystem(state,18000,context);
  assert.equal(target.length,54000);
  assert.ok(target.every(Number.isFinite),'Capability inputs must be finite');
  assert.deepEqual(target,capabilitySystem(state,18000,context),'Stable identity on regeneration');
  for(let i=2;i<target.length;i+=3)assert.ok(target[i]<7,'Capability camera clearance');
 }
 for(const modules of [3,6]) {
  capabilityTuning.moduleCount=modules;
  assert.ok(capabilitySystem(3,18000,context).every(Number.isFinite),'Module control extrema');
 }
 capabilityTuning.moduleCount=4;
}
console.log('Four route-only capability systems: determinism, mobile, camera clearance and module extrema passed');

const {helix} = require('../src/particles/formations/helix.ts');
for (const [width, height] of [[18.47,11.547],[8.02,11.547],[5.34,11.547]]) {
  const context = {...tuning,width,height};
  const points = helix(18000,context);
  assert.deepEqual(points,helix(18000,context),'DNA correspondence must stay deterministic');
  const bounds = [0,1,2].map(axis => {
    let min=Infinity,max=-Infinity;
    for(let i=axis;i<points.length;i+=3){min=Math.min(min,points[i]);max=Math.max(max,points[i]);}
    return max-min;
  });
  assert.ok(bounds[0]>bounds[1]*2,'DNA must retain a horizontal silhouette');
  assert.ok(bounds[2]>.5,'DNA must retain volumetric depth');
  console.log(`${width}/${height}: horizontal DNA silhouette and depth passed`);
}

const {surface} = require('../src/particles/formations/surface.ts');
const {sculpture} = require('../src/particles/formations/sculpture.ts');
for(const generate of [surface,sculpture]) {
 const c={...tuning,width:18.47,height:11.547};
 const points=generate(18000,c);
 assert.deepEqual(points,generate(18000,c),'New FORM targets must preserve deterministic correspondence');
 let minZ=Infinity,maxZ=-Infinity;
 for(let i=2;i<points.length;i+=3){minZ=Math.min(minZ,points[i]);maxZ=Math.max(maxZ,points[i]);}
 assert.ok(maxZ-minZ>2,'Folded forms must occupy depth, not a flat plane');
 assert.ok(maxZ<7,'Form must stay in front of the camera near plane');
}
console.log('Surface/sculpture determinism, depth and camera clearance passed');

const {sectionFormations} = require('../src/particles/section-formations.ts');
for(const [name,generate] of Object.entries(sectionFormations)) {
 for(const width of [18.47,5.34]) {
  const context={...tuning,width,height:11.547};
  const points=generate(18000,context);
  assert.ok(points.every(Number.isFinite),`${name}: section coordinates must be finite`);
  assert.deepEqual(points,generate(18000,context),`${name}: lazy regeneration must preserve correspondence`);
  for(let i=2;i<points.length;i+=3)assert.ok(points[i]<9,`${name}: camera clearance`);
 }
}
const resident=makeGeometry(60000,{...tuning,width:18.47,height:11.547});
assert.ok(!resident.geometry.hasAttribute('aSurfaceTarget')&&!resident.geometry.hasAttribute('aSculptureTarget'),'Section forms must not remain resident hero targets');
const bytes=Object.values(resident.geometry.attributes).reduce((sum,a)=>sum+a.array.byteLength,0);
assert.ok(bytes<=8400000,'Primary attribute memory must remain bounded at high tier');
resident.geometry.dispose();
console.log(`${Object.keys(sectionFormations).length} lazy section formations passed; high-tier primary attributes ${bytes} bytes`);

for (const width of [5.34,11.85]) {
 const context={...tuning,width,height:11.547};
 for(let chapter=0;chapter<4;chapter++) {
  const points=capabilitySystem(chapter,18000,context,true);
  assert.deepEqual(points,capabilitySystem(chapter,18000,context,true),'Mobile chapter regeneration must remain deterministic');
  const side=chapter%2===0?1:-1;
  let clear=0;
  for(let i=0;i<points.length;i+=3) {
   assert.ok(Number.isFinite(points[i])&&Number.isFinite(points[i+1])&&Number.isFinite(points[i+2]));
   assert.ok(points[i+2]<9,'Mobile matter must preserve camera clearance');
   if(points[i]*side>width*.08)clear++;
  }
  assert.ok(clear/18000>.90,'The material core must stay on the side opposite the mobile copy');
 }
}
console.log('Portrait and compact landscape mobile capability sides, determinism and clearance passed');
