import {getLogoPoints} from '../logo/path';
import type {Generator} from './shared';
export const logo:Generator=(count,c)=>{
 const p=getLogoPoints(count),mobile=c.width<c.height;
 const scale=Math.min(c.width*(mobile?.32:.19),c.height*.205)*c.logoScale;
 for(let i=0;i<count;i++){p[i*3]*=scale;p[i*3+1]=p[i*3+1]*scale+c.height*(mobile?.20:.16);p[i*3+2]*=scale;}
 return p;
};
