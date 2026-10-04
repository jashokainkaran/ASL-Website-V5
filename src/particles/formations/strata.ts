import {sample,hash,type Generator} from './shared';
export const strata:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height,layer=i%5,depth=hash(i,44)-.5;
 return [(mobile?0:-c.width*.30)+(u-.5)*c.width*(mobile?.95:.58),
 (layer-2)*(mobile?.62:1.42)+Math.sin(u*4+layer*.15)*.22+(mobile?c.height*.21:0)+(hash(i,45)-.5)*.08,
 depth*(mobile?1.0:3.4)+Math.cos(u*3)*.5];
});
