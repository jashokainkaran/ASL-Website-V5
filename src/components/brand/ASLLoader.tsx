'use client';
import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';
import {createTimeline,stagger} from 'animejs';
import {getASLMarkPoints} from '@/particles/logo/path';
import {awakenEnvironment} from '@/lib/awakening';
import {hash} from '@/particles/formations/shared';
const targets=getASLMarkPoints(360);
/** SVG matter is intentionally shared by direct entry and the no-WebGL path. */
export function ASLLoader(){
 const path=usePathname(),initial=useRef(path),departed=useRef(false),root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=root.current!;
  if(path!==initial.current)departed.current=true;
  if(departed.current||initial.current.startsWith('/lab')){el.hidden=true;return;}
  if(initial.current==='/'){el.hidden=true;return awakenEnvironment();}
  el.hidden=false;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dots=Array.from(el.querySelectorAll<SVGCircleElement>('.identity-particle'));
  const complete=()=>{el.hidden=true;};
  const score=createTimeline({onComplete:complete});
  // Independent regional delays and two curved legs, followed by physical recovery.
  dots.forEach((dot,i)=>{
   const tx=targets[i*3]*110,ty=-targets[i*3+1]*110;
   const sx=(hash(i,71)-.5)*(reduced?390:940),sy=(hash(i,72)-.5)*(reduced?300:640);
   const bend=(hash(i,73)-.5)*(reduced?18:58);
   dot.setAttribute('cx',String(tx));dot.setAttribute('cy',String(ty));
   score.add(dot,{translateX:[sx-tx,sx*.42-tx],translateY:[sy-ty,sy*.42-ty],opacity:[.3,.65],duration:340,ease:'inQuad'},Math.floor(i/90)*24)
    .add(dot,{translateX:[{to:(sx*.42-tx)*.45+bend,duration:180},{to:(tx-sx)*.025,duration:210}],translateY:[sy*.42-ty,(ty-sy)*.025],duration:390,ease:'inOutSine'},340+Math.floor(i/90)*24)
    .add(dot,{translateX:0,translateY:0,opacity:.85,duration:190,ease:'outCubic'},730+Math.floor(i/90)*24);
  });
  score.add(el.querySelectorAll('.identity-residue'),{translateY:[0,reduced?-2:-7],opacity:[.2,.4],duration:1000,delay:stagger(4),ease:'inOutSine'},0)
   .add(el,{opacity:[1,0],duration:220,ease:'inOutSine'},1050);
  const safety=setTimeout(complete,1450);
  const dismiss=()=>complete();
  document.addEventListener('focusin',dismiss);document.addEventListener('pointerdown',dismiss);
  return()=>{clearTimeout(safety);score.revert();document.removeEventListener('focusin',dismiss);document.removeEventListener('pointerdown',dismiss);};
 },[path]);
 return <div ref={root} className="asl-brand-loader" hidden aria-hidden="true"><svg className="identity-field" viewBox="-500 -350 1000 700">
 {Array.from({length:360},(_,i)=><circle className="identity-particle" key={i} r={i%9===0?1.5:.85}/>)}
 {Array.from({length:18},(_,i)=><circle className="identity-residue" key={i} cx={(hash(i,81)-.5)*700} cy={(hash(i,82)-.5)*500} r=".7"/>)}
 </svg></div>;
}
