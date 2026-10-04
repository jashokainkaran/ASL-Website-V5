import {markPaths} from '@/particles/logo/path';
export function ASLMark({className='',title}:{className?:string;title?:string}) {
 return <svg className={className} viewBox="0 0 52 48" fill="none" role={title?'img':undefined} aria-label={title} aria-hidden={title?undefined:true}>
 {markPaths.map((d,i)=><path key={d} className={`asl-stroke${i===3?' asl-base':''}`} pathLength="1" d={d} stroke={i===3?'var(--brand-accent, currentColor)':'currentColor'} strokeWidth="2.2" strokeLinecap={i===3?'butt':'square'}/>)}</svg>;
}
