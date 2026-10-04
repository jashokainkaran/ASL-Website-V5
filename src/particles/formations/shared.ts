export type Context = { width:number; height:number; cloudDensity:number; cloudSpread:number; helixRadius:number; helixLength:number; helixTwist:number; helixYaw:number; helixPitch:number; helixRoll:number; helixVariation:number; cameraDepth:number; helixOffset:number; helixDepth:number; helixTurns:number; filamentCount:number; filamentSpread:number; filamentDepth:number; braid:number; surfaceFold:number; surfaceTwist:number; surfaceDepth:number; surfaceScale:number; logoScale:number };
export type Generator = (count:number, context:Context) => Float32Array;
export const hash = (i:number, salt=0) => { const x=Math.sin(i*127.1+salt*311.7)*43758.5453123; return x-Math.floor(x); };
// Every generator is sampled in the same ascending longitudinal path parameter u.
// Stratified offsets vary within each local neighbourhood, never randomise correspondence.
export function sample(count:number, fn:(u:number,i:number)=>number[]) { const data=new Float32Array(count*3); for(let i=0;i<count;i++) data.set(fn(i/(count-1),i),i*3); return data; }
export function cross(i:number, width:number) { const theta=hash(i,2)*Math.PI*2; const r=Math.sqrt(hash(i,3))*width*(hash(i,8)>.96?1.8:1); return [Math.cos(theta)*r,Math.sin(theta)*r]; }
