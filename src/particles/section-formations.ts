import {surface} from './formations/surface';
import {sculpture} from './formations/sculpture';
import {lattice} from './formations/lattice';
import {strata} from './formations/strata';
import {stream} from './formations/stream';
import {cluster} from './formations/cluster';
import {membrane,lamellae,ribbonFlow,openShell} from './formations/section-matter';
import {sample,hash,type Generator} from './formations/shared';

const frame: Generator = (count,c) => sample(count,(u,i) => {
  const mobile=c.width<c.height, side=i%4, layer=i%3;
  const x=side<2?(u-.5)*c.width*.5:(side===2?-1:1)*c.width*.25;
  const y=side<2?(side===0?-1:1)*c.height*.29:(u-.5)*c.height*.58;
  return [x+(mobile?0:-c.width*.28),y+(mobile?c.height*.2:0),(layer-1)*.8+(hash(i,44)-.5)*.06];
});
const wave: Generator = (count,c) => sample(count,(u,i) => {
  const mobile=c.width<c.height,lane=i%5;
  return [(u-.5)*c.width*.65+(mobile?0:c.width*.28),Math.sin(u*5+lane*.22)*1.2+(lane-2)*.35+(mobile?c.height*.2:0),Math.cos(u*5+lane*.22)*1.4];
});
const placed=(generate:Generator,side:number):Generator=>(count,c)=>{
  const p=generate(count,{...c,width:c.width*.58,surfaceScale:c.surfaceScale*.68});
  for(let i=0;i<p.length;i+=3){p[i]+=c.width<c.height?0:c.width*.28*side;p[i+1]+=c.width<c.height?c.height*.2:0;}
  return p;
};
export const sectionFormations:Record<string,Generator>={
  DESIGN_MEMBRANE:membrane, DEVELOPMENT_LAMELLAE:lamellae,
  DEPLOYMENT_RIBBONS:ribbonFlow, PRODUCT_OPEN_SHELL:openShell,
  DESIGN_LATTICE:lattice, DESIGN_SURFACE:placed(surface,1),
  DEVELOPMENT_STRATA:strata, DEVELOPMENT_FRAME:frame,
  DEPLOYMENT_WAVE:wave, DEPLOYMENT_STREAM:stream,
  PRODUCT_CLUSTER:cluster, PRODUCT_SHELL:placed(sculpture,-1),
};
export const sectionWindows = [
  {name:'DESIGN_MEMBRANE',start:.52,end:.59},
  {name:'DEVELOPMENT_LAMELLAE',start:.61,end:.67},
  {name:'DEPLOYMENT_RIBBONS',start:.69,end:.75},
  {name:'PRODUCT_OPEN_SHELL',start:.77,end:.84},
] as const;
