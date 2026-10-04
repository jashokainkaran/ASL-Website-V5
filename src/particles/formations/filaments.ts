import {sample,cross,type Generator} from './shared';
export const filaments:Generator=(count,c)=>sample(count,(u,i)=>{const lane=i%c.filamentCount; const phase=lane*.83; const off=cross(i,(.22+.63*Math.sin(Math.PI*u)**2)*c.filamentSpread); return [(u-.5)*c.width*1.45,Math.sin(u*7+phase)*2.7+(lane-(c.filamentCount-1)/2)*.65+off[0],Math.cos(u*6+phase)*1.7+off[1]];});
