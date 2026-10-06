/** Quiet vector equivalents; all commercial content remains server-readable DOM. */
export function CapabilityFallback({index}: {index: number}) {
  const nodes=[[45,185],[135,45],[225,155],[340,65],[365,225],[100,245]];
  const edges=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,3]];
  const modules=[[80,75],[275,65],[145,205],[330,190]];
  return <svg className="capability-vector" viewBox="0 0 400 280" fill="none" aria-hidden="true">
    {index===0&&Array.from({length:8},(_,i)=><path key={i} d={`M25 ${70+i*18} C140 ${i%2?220-i*12:10+i*9} 260 ${i%2?30+i*16:240-i*8} 375 ${75+i*15}`} stroke="currentColor" strokeDasharray="1 3"/>)}
    {index===1&&<>{edges.map(([a,b],i)=><path key={i} d={`M${nodes[a]} L${nodes[b]}`} stroke="currentColor" strokeDasharray="1 3"/>)}{nodes.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="currentColor"/>)}</>}
    {index===2&&Array.from({length:7},(_,i)=><path key={i} d={`M40 140 Q180 ${90+i*14} 375 ${25+i*38}`} stroke="currentColor" strokeWidth={i%2?1:2} strokeDasharray="2 5 1 9"/>)}
    {index===3&&<>{modules.map(([x,y],i)=><g key={i}><path d={`M${x} ${y} L${modules[(i+1)%4]}`} stroke="currentColor" strokeDasharray="1 5"/><rect x={x-14-i*2} y={y-10} width={28+i*4} height={20+i*3} rx="3" stroke="currentColor" strokeDasharray="1 2"/></g>)}</>}
  </svg>;
}
