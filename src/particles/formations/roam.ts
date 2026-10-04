import {sample,hash,cross,type Generator} from './shared';
// Three broad folds of material, with pockets of density instead of a uniform depth volume.
export const roam:Generator=(count,c)=>sample(count,(u,i)=>{
 const band=i%3,phase=band*1.85,halo=hash(i,8)>.96;
 const off=cross(i,(halo?1.1:.24+.55*Math.sin(u*8+phase)**2));
 return [(u-.5)*c.width*1.3,Math.sin(u*6+phase)*c.height*.31+off[0],Math.cos(u*5+phase)*1.7+off[1]*(halo?2:1)];
});
