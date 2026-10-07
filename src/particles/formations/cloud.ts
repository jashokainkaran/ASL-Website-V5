import {sample,hash,type Generator} from './shared';
export const cloud:Generator=(count,c)=>sample(count,(u,i)=>{const a=u*Math.PI*12; const r=Math.pow(hash(i,4),c.cloudDensity)*3.9*c.cloudSpread; const v=(hash(i,5)-.5)*2; const wave=1+.22*Math.sin(a*3); return [Math.cos(a)*r*wave-c.width*.12, v*r*.95+.35,Math.sin(a)*r*.7];});
