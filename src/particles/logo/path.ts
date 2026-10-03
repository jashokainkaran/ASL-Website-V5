// PROVISIONAL original monoline ASL. One continuous cubic spline, shared by SVG and points.
export const logoSegments: number[][] = [
 // Angular A, a shared crossbar, an asymmetric S and a forward-cut L terminal.
 [0,95, 18,65, 38,30, 56,5],
 [56,5, 65,35, 73,65, 82,95],
 [82,95, 79,83, 76,72, 73,61],
 [73,61, 59,61, 44,61, 28,61],
 [28,61, 52,61, 78,61, 102,61],
 [102,61, 99,86, 119,96, 144,96],
 [144,96, 168,96, 186,84, 185,69],
 [185,69, 184,56, 166,49, 146,43],
 [146,43, 126,37, 112,31, 116,20],
 [116,20, 121,5, 139,4, 158,5],
 [158,5, 180,5, 205,5, 235,5],
 [235,5, 230,34, 225,65, 220,95],
 [220,95, 245,95, 276,95, 300,95],
];
export const logoPath='M 0 95 '+logoSegments.map(s=>`C ${s.slice(2).join(' ')}`).join(' ');
function point(s:number[],t:number) {const r=1-t;return [r*r*r*s[0]+3*r*r*t*s[2]+3*r*t*t*s[4]+t*t*t*s[6],r*r*r*s[1]+3*r*r*t*s[3]+3*r*t*t*s[5]+t*t*t*s[7]];}
const samples=logoSegments.flatMap(s=>Array.from({length:100},(_,j)=>point(s,j/99)));
const lengths=[0]; for(let i=1;i<samples.length;i++) lengths[i]=lengths[i-1]+Math.hypot(samples[i][0]-samples[i-1][0],samples[i][1]-samples[i-1][1]);
export function getLogoPoints(count:number) {const result=new Float32Array(count*3); let j=1; for(let i=0;i<count;i++){const distance=i/(count-1)*lengths[lengths.length-1];while(j<lengths.length-1&&lengths[j]<distance)j++;const t=(distance-lengths[j-1])/(lengths[j]-lengths[j-1]||1);result[i*3]=(samples[j-1][0]*(1-t)+samples[j][0]*t-150)/150;result[i*3+1]=(50-samples[j-1][1]*(1-t)-samples[j][1]*t)/150;}return result;}
