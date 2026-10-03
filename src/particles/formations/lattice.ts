import {sample,hash,type Generator} from './shared';
export const lattice:Generator=(count,c)=>sample(count,(u,i)=>{const mobile=c.width<c.height;const col=Math.floor(u*25),row=i%23,layer=i%5;const jitter=(hash(i,31)-.5)*.035;return [(mobile?0:c.width*.28)+(col/24-.5)*c.width*(mobile?.95:.62)+jitter,(row/22-.5)*c.height*(mobile?.40:.96)+(mobile?c.height*.20:0)+jitter,(layer-2)*.45+jitter];});
