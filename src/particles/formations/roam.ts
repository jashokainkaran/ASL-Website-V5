import {sample,hash,type Generator} from './shared';
export const roam:Generator=(count,c)=>sample(count,(u,i)=>{const band=i%3;const wave=Math.sin(u*7+band*1.8);const loose=hash(i,8)>.95;const thickness=loose?c.height*1.5:c.height*(.10+.09*Math.sin(u*9)**2);return [(u-.5)*c.width*1.5,wave*c.height*.4+(hash(i,4)-.5)*thickness,(hash(i,5)-.5)*6+Math.cos(u*5+band)*1.2];});
