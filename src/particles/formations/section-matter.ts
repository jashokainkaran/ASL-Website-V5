import {hash,sample,type Generator} from './shared';

/** Shared longitudinal correspondence, with densely sampled cross-sections.
 * The folded bodies stay in the visual half of each editorial composition. */
const compose=(count:number,c:Parameters<Generator>[1],side:number,shape:(u:number,v:number,i:number)=>number[])=>{
 const mobile=c.width<c.height;
 const width=mobile?c.width*.72:c.width*.43;
 const height=mobile?c.height*.20:c.height*.56;
 return sample(count,(u,i)=>{
  const v=hash(i,2)*2-1;
  const [x,y,z]=shape(u,v,i);
  return [x*width+(mobile?0:side*c.width*.285),y*height+(mobile?c.height*.14:0),z];
 });
};

export const membrane:Generator=(count,c)=>compose(count,c,1,(u,v,i)=>{
 const fold=u*Math.PI*2.2+v*1.15;
 const taper=Math.pow(Math.sin(u*Math.PI),.45);
 return [(u-.5)*.96+v*.07,Math.sin(fold)*.21+v*.28*taper,
  Math.cos(fold)*1.55+v*.85+Math.sin(v*9+u*7)*.10+(hash(i,9)-.5)*.045];
});

export const lamellae:Generator=(count,c)=>compose(count,c,-1,(u,v,i)=>{
 const layer=i%9;
 const a=(u*1.35-.68)*Math.PI;
 const radius=.31+layer*.025;
 return [Math.cos(a)*radius-.18+v*.035,
  Math.sin(a)*.34+(layer-4)*.043+v*.024,
  Math.sin(a+.7)*1.45+(layer-4)*.26+v*.16];
});

export const ribbonFlow:Generator=(count,c)=>compose(count,c,1,(u,v,i)=>{
 const ribbon=i%3;
 const phase=u*5.6+ribbon*.7;
 const spread=Math.sin(u*Math.PI)*.7+.3;
 return [(u-.5)*1.12,Math.sin(phase)*.22+(ribbon-1)*.10+v*.085*spread,
  Math.cos(phase)*1.65+v*.60*spread+(ribbon-1)*.30];
});

export const openShell:Generator=(count,c)=>compose(count,c,-1,(u,v,i)=>{
 const a=(u*1.72-.36)*Math.PI;
 const rim=1+.16*Math.sin(a*3);
 const r=(.29+v*.075)*rim;
 return [Math.cos(a)*r,Math.sin(a)*r*.92,
  Math.sin(a*.9)*1.65+v*1.05+Math.cos(a*2)*.35+(hash(i,9)-.5)*.045];
});
