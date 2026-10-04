import {getASLMarkPoints} from '@/particles/logo/path';
const points=getASLMarkPoints(38);
/** A sparse projection of the canonical matter; two groups, no simulation loop. */
export function ResidualMatter(){return <svg className="residual-matter" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true"><g>{Array.from({length:38},(_,i)=>{
 const x=i%2?930+points[i*3]*45:48+points[i*3]*35;
 return <circle key={i} cx={x} cy={(i*137+65)%980} r={i%7===0?1.5:.7} opacity={.18+(i%5)*.09}/>;
})}</g></svg>;}
