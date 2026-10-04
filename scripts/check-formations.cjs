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
