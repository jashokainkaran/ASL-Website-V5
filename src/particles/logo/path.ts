// PROVISIONAL original monoline ASL. One continuous cubic spline, shared by SVG and points.
export const logoSegments: number[][] = [
 [0,95, 13,65, 27,30, 40,5], [40,5, 53,30, 67,65, 80,95],
 [80,95, 75,83, 70,72, 65,62], [65,62, 52,62, 39,62, 26,62],
 [26,62, 51,62, 76,62, 99,62], [99,62, 105,108, 177,109, 180,76],
 [180,76, 184,48, 104,52, 107,25], [107,25, 111,-1, 160,-1, 183,16],
 [183,16, 199,27, 211,22, 225,5], [225,5, 225,35, 225,65, 225,95],
 [225,95, 250,95, 275,95, 300,95],
];
export const logoPath='M 0 95 '+logoSegments.map(s=>`C ${s.slice(2).join(' ')}`).join(' ');
function point(s:number[],t:number) {const r=1-t;return [r*r*r*s[0]+3*r*r*t*s[2]+3*r*t*t*s[4]+t*t*t*s[6],r*r*r*s[1]+3*r*r*t*s[3]+3*r*t*t*s[5]+t*t*t*s[7]];}
const samples=logoSegments.flatMap(s=>Array.from({length:100},(_,j)=>point(s,j/99)));
const lengths=[0]; for(let i=1;i<samples.length;i++) lengths[i]=lengths[i-1]+Math.hypot(samples[i][0]-samples[i-1][0],samples[i][1]-samples[i-1][1]);
export function getLogoPoints(count:number) {const result=new Float32Array(count*3); let j=1; for(let i=0;i<count;i++){const distance=i/(count-1)*lengths[lengths.length-1];while(j<lengths.length-1&&lengths[j]<distance)j++;const t=(distance-lengths[j-1])/(lengths[j]-lengths[j-1]||1);result[i*3]=(samples[j-1][0]*(1-t)+samples[j][0]*t-150)/150;result[i*3+1]=(50-samples[j-1][1]*(1-t)-samples[j][1]*t)/150;}return result;}
