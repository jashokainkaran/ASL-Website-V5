import {sample,cross,type Generator} from './shared';
export const stream:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height,lane=i%5,off=cross(i,.10+.20*Math.sin(u*Math.PI)**2);
 return [(mobile?0:c.width*.30)+(u-.5)*c.width*(mobile?1.22:.65),
 (u-.5)*(mobile?3.1:6.8)+(lane-2)*(mobile?.28:.5)+Math.sin(u*3)*.5+off[0]+(mobile?c.height*.21:0),
 Math.sin(u*4+lane*.25)*1.5+off[1]];
});
