import {hash} from '../formations/shared';
// Exact absolute path coordinates from public/brand/asl-mark-light.svg.
export const markPolylines = [
 [[5,38],[18,8],[27,31],[15,31]],
 [[27,12],[42,12],[29,24],[43,37],[25,37]],
 [[43,9],[43,38]], [[5,43],[43,43]],
] as const;
export const markPaths=markPolylines.map(points=>points.map((p,i)=>`${i?'L':'M'}${p[0]} ${p[1]}`).join(''));
const segments=markPolylines.flatMap(points=>points.slice(1).map((end,i)=>{
 const start=points[i];return {start,end,length:Math.hypot(end[0]-start[0],end[1]-start[1])};
}));
const total=segments.reduce((sum,s)=>sum+s.length,0);
/** Arc-length ordering preserves correspondence; disconnected paths never acquire connecting strokes. */
export function getASLMarkPoints(count:number) {
 const result=new Float32Array(count*3);
 for(let i=0;i<count;i++) {
  let distance=(i+.5)/count*total;
  let segment=segments[segments.length-1];
  for(const candidate of segments){segment=candidate;if(distance<=candidate.length)break;distance-=candidate.length;}
  const {start,end,length}=segment,t=Math.min(1,distance/length),offset=(hash(i,42)-.5)*2.2;
  const x=start[0]+(end[0]-start[0])*t-(end[1]-start[1])/length*offset;
  const y=start[1]+(end[1]-start[1])*t+(end[0]-start[0])/length*offset;
  result.set([(x-24)/20,(25.5-y)/20,(hash(i,43)-.5)*.025],i*3);
 }
 return result;
}
export const getLogoPoints=getASLMarkPoints;
