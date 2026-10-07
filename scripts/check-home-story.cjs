/* eslint-disable @typescript-eslint/no-require-imports -- Match the existing dependency-free TypeScript harness. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,filename);
const {homeStory,homeIdentity,storyBeat}=require('../src/content/home-story.ts');
const {formations,OPENING_END}=require('../src/particles/states.ts');
const identity=formations.find(formation=>formation.name==='logo');
assert.equal(homeStory.length,4);
homeStory.forEach((beat,index)=>{
 assert.ok(beat.enter<beat.hold&&beat.hold<beat.exit&&beat.exit<beat.end,`${beat.name}: entry, reading hold and exit must be ordered`);
 assert.ok(beat.exit-beat.hold>=.04,`${beat.name}: reading hold too short`);
 assert.equal(storyBeat((beat.hold+beat.exit)/2),beat.name);
 if(index)assert.ok(homeStory[index-1].end<beat.enter,'Two narrative ideas overlap');
});
assert.ok(homeIdentity.readable>=identity.window[1],'Header gate must follow completed ASL target');
assert.ok(homeIdentity.header>homeIdentity.readable,'Identity needs a hold before navigation');
assert.ok(homeIdentity.header<OPENING_END);
assert.equal(homeIdentity.settled,OPENING_END);
console.log('Home narrative reading holds, sequential beats, and identity-before-navigation score passed');
