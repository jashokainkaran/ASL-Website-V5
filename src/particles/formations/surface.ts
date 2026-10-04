import {sample,hash,type Generator} from './shared';
/** FORM: longitudinal streams spread across one folded computational membrane. */
export const surface:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height,lanes=mobile?Math.min(5,c.filamentCount):c.filamentCount;
 const v=((i%lanes)+hash(i,2))/lanes*2-1;
 const fold=Math.sin(u*Math.PI*2+v*c.surfaceTwist)*(mobile?.8:1.35)*c.surfaceFold;
 return [(u-.5)*c.width*.82*c.surfaceScale,(v*c.height*.19+fold)*c.surfaceScale,(Math.cos(u*Math.PI*2+v*c.surfaceTwist)*1.8*c.surfaceDepth+v*.7)*c.surfaceScale];
});
