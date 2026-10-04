'use client';
import {useEffect,useRef} from 'react';
import {createTimeline,stagger} from 'animejs';
import {ASLMark} from './ASLMark';
const storageKey='asl-intro-seen';
/** A non-blocking brand intro: never hides or inerts the meaningful document. */
export function ASLLoader(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const element=root.current!;
  let seen=false;
  try {seen=sessionStorage.getItem(storageKey)==='1';} catch { /* Storage is optional. */ }
  if(seen){element.hidden=true;return;}
  element.hidden=false;
  const complete=()=>{element.hidden=true;try{sessionStorage.setItem(storageKey,'1');}catch{/* Private storage may be unavailable. */}};
  const safe=setTimeout(complete,1850);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animation=createTimeline({onComplete:complete})
   .add(element.querySelectorAll('.asl-stroke'),{opacity:[0,.8],translateX:(_:unknown,i=0)=>[(i%2?1:-1)*(reduced?3:12),0],strokeDashoffset:[1,.18],duration:900,delay:stagger(95),ease:'outCubic'},0)
   .add(element.querySelector('.asl-loader-signal')!,{scaleX:[0,1],opacity:[0,.45],duration:650,ease:'inOutSine'},400)
   .add(element,{opacity:[1,0],duration:450,ease:'inOutSine'},1150);
  return()=>{clearTimeout(safe);animation.revert();};
 },[]);
 return <div ref={root} className="asl-brand-loader" hidden aria-hidden="true">
  <div className="asl-loader-specks">{Array.from({length:22},(_:unknown,i=0)=><i key={i} style={{left:`${(i*37+11)%100}%`,top:`${(i*23+7)%100}%`,animationDelay:`${i*-.13}s`}}/>)}</div>
  <div className="asl-loader-lockup"><ASLMark className="asl-loader-mark"/><i className="asl-loader-signal"/></div>
 </div>;
}
