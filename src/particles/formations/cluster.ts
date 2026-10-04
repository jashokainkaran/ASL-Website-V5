import {sample,cross,hash,type Generator} from './shared';
export const cluster:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height,a=u*Math.PI*6,lane=i%3,off=cross(i,.24);
 const r=1.1+Math.pow(hash(i,54),.45)*1.1;
 return [(mobile?0:c.width*.29)+Math.cos(a)*r*(mobile?c.width*.14:c.width*.10)+off[0],
 Math.sin(a)*r*(mobile?.65:1.55)+off[1]+(mobile?c.height*.22:0),Math.sin(a+lane*2.1)*1.8+off[0]];
});
