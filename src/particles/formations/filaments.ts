import {sample,cross,type Generator} from './shared';
export const filaments:Generator=(count,c)=>sample(count,(u,i)=>{
 const lanes=c.width<c.height?Math.min(5,c.filamentCount):c.filamentCount;
 const lane=i%lanes,phase=lane*.83;
 const off=cross(i,(.16+.45*Math.sin(Math.PI*u)**2)*( .7+lane/lanes*.5)*c.filamentSpread);
 const braid=Math.sin(u*12+phase)*c.braid;
 const span=.9+.55*lane/Math.max(1,lanes-1);
 return [(u-.5)*c.width*span+Math.sin(phase)*c.width*.08,Math.sin(u*7+phase)*2.3+(lane-(lanes-1)/2)*.6+off[0]+braid-.25, (Math.cos(u*6+phase)*1.4+(lane-(lanes-1)/2)*.3+braid+off[1])*c.filamentDepth];
});
