import {sample,hash,type Generator} from './shared';
/** FORM: the same membrane curls into an open asymmetric shell, retaining its void. */
export const sculpture:Generator=(count,c)=>sample(count,(u,i)=>{
 const lanes=c.width<c.height?Math.min(5,c.filamentCount):c.filamentCount;
 const v=((i%lanes)+hash(i,2))/lanes*2-1,angle=(u*1.65-.3)*Math.PI;
 const r=Math.min(c.width*.31,c.height*.36)*(1+.18*Math.sin(angle*2)+v*.24);
 return [Math.cos(angle)*r*c.surfaceScale,Math.sin(angle)*r*.82*c.surfaceScale,(Math.sin(angle*.8)*1.8*c.surfaceDepth+v*c.surfaceTwist+Math.cos(angle*2)*.3*c.surfaceFold)*c.surfaceScale];
});
