import {sample,cross,type Generator} from './shared';
export const stream:Generator=(count,c)=>sample(count,(u,i)=>{const mobile=c.width<c.height;const lane=i%5;const off=cross(i,.12+.25*Math.sin(u*Math.PI));return [(mobile?0:c.width*.28)+(u-.5)*c.width*(mobile?1.3:.63),Math.sin(u*4+lane*.3)*(mobile?1.3:3.5)+(lane-2)*.4+off[0]+(mobile?c.height*.2:0),Math.cos(u*5+lane)*1.8+off[1]];});
