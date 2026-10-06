/** Vector material for no-WebGL; essential information remains in surrounding DOM. */
export function CapabilityFallback({index}: {index: number}) {
  const paths = Array.from({length: 18}, (_, i) => {
    const n = i * 5;
    return index === 0 ? `M35 ${95+n} C150 ${-20+n} 220 ${320-n} 365 ${110+n}`
      : index === 1 ? `M${70+n} 225 C${-20+n} 140 ${110+n} 5 ${255+n/2} 65 C${340-n} 110 ${190+n} 220 ${70+n} 225`
      : index === 2 ? `M5 ${70+n} C115 ${180+n} 255 ${-30+n} 395 ${155+n}`
      : `M${255+n/3} ${35+n/4} C${65-n/3} ${-10+n} ${30+n} ${260-n/2} ${250+n/2} ${240-n/3} C${360-n/2} ${215-n} ${335-n/2} ${90+n} ${255+n/3} ${80+n/2}`;
  });
  return <svg className="capability-vector" viewBox="0 0 400 280" fill="none">{paths.map((d, i) => <path d={d} key={i} stroke="currentColor" strokeWidth=".8" strokeDasharray={i % 3 === 0 ? '1 4' : '2 3'}/>)}</svg>;
}
