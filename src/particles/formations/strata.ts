import {sample,cross,type Generator} from './shared';
export const strata:Generator=(count,c)=>sample(count,(u,i)=>{const mobile=c.width<c.height,layer=i%9;const off=cross(i,.08);return [(mobile?0:c.width*.3)+(u-.5)*c.width*(mobile?1.15:.66), (layer-4)*(mobile?.36:1.05)+Math.sin(u*6+layer*.25)*.55+off[0]+(mobile?c.height*.2:0),Math.cos(u*5+layer*.3)*1.4+off[1]];});
