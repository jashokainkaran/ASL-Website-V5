import {getLogoPoints} from '../logo/path';
import {cross,type Generator} from './shared';
export const logo:Generator=(count,c)=>{const p=getLogoPoints(count);const scale=c.width*(c.width<c.height?.4:.245)*c.logoScale;for(let i=0;i<count;i++){const off=cross(i,.036);p[i*3]=p[i*3]*scale+off[0];p[i*3+1]=p[i*3+1]*scale+off[1]+c.height*.18;p[i*3+2]=off[0]*2;}return p;};
