import {sample,cross,type Generator} from './shared';
export const edge:Generator=(count,c)=>sample(count,(u,i)=>{const a=u*Math.PI*2;const off=cross(i,.22);return [Math.cos(a)*c.width*.61+off[0],Math.sin(a)*c.height*.62+off[1],-1+Math.sin(a*5)*.5];});
