import {hash} from './shared';

export type Point3 = [number, number, number];
export type Path3 = (t: number) => Point3;

/** Deterministic circular cross-section in the path's normal plane, not a flat XY scribble. */
export function tubePoint(path: Path3, t: number, i: number, radius: number): Point3 {
  const p=path(t), before=path(Math.max(0,t-.001)), after=path(Math.min(1,t+.001));
  const d=after.map((v,j)=>v-before[j]);
  const length=Math.hypot(...d)||1;
  const [tx,ty,tz]=d.map(v=>v/length);
  const norm=Math.hypot(tx,tz);
  const [nx,ny,nz]=norm>.001?[-tz/norm,0,tx/norm]:[1,0,0];
  const bx=ty*nz-tz*ny, by=tz*nx-tx*nz, bz=tx*ny-ty*nx;
  const angle=hash(i,21)*Math.PI*2;
  const r=radius*Math.sqrt(hash(i,22));
  const a=Math.cos(angle)*r,b=Math.sin(angle)*r;
  return [p[0]+nx*a+bx*b,p[1]+ny*a+by*b,p[2]+nz*a+bz*b];
}
