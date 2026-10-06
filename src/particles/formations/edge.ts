import {sample,cross,hash,type Generator} from './shared';
// Broad, interrupted perimeter folds: keep the statement centre free for type.
export const edge:Generator=(count,c)=>sample(count,(u,i)=>{
 const a=u*Math.PI*2, mobile=c.width<c.height;
 const off=cross(i,.14+hash(i,17)*.20);
 const ripple=Math.sin(a*3)*.018;
 return [Math.cos(a)*c.width*(.54+ripple)+off[0],
  Math.sin(a)*c.height*(mobile?.56:.53)+off[1],
  Math.sin(a*2)*.7+(hash(i,21)-.5)*.65];
});
