'use client';
import {useEffect,useRef} from 'react';
import {createTimeline,animate,stagger,type JSAnimation} from 'animejs';
import gsap from 'gsap';
import {awakenEnvironment} from '@/lib/awakening';
import {scene} from '@/lib/scene-store';
import {hash} from '@/particles/formations/shared';

/** Server-visible entry veil. The root instance survives all client navigation. */
export function ASLLoader(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=root.current!,html=document.documentElement,content=document.getElementById('site-interface')!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start=performance.now();let fontsReady=false,exiting=false,disposed=false,skipped=false;
  let exitMotion:JSAnimation|undefined;
  content.inert=true;html.dataset.entry='pending';
  document.fonts.ready.then(()=>{if(!disposed)fontsReady=true;});
  const wake=awakenEnvironment(reduced);
  const score=createTimeline();
  score.add(el.querySelector('.entry-texture')!,{opacity:[0,.025],duration:reduced?300:900,ease:'inOutSine'},0)
   .add(el.querySelectorAll('.entry-speck'),{opacity:[0,.28],translateX:[reduced?0:-12,0],delay:stagger(12),duration:reduced?300:1100,ease:'inOutSine'},reduced?0:240);
  if(!reduced)score.add(el.querySelector('.entry-disturbance')!,{translateX:['-110%','110%'],opacity:[0,.3,0],duration:1500,ease:'inOutSine'},350);
  const finish=()=>{
   html.dataset.entry='ready';el.hidden=true;content.inert=false;scene.awakening=1;
   if(skipped)content.querySelector<HTMLAnchorElement>('.skip-link')?.focus();
  };
  const reveal=()=>{
   if(exiting)return;exiting=true;gsap.ticker.remove(check);
   el.dataset.phase='reveal';
   exitMotion=animate(el,reduced||skipped?{opacity:[1,0],duration:reduced?350:180,ease:'inOutSine',onComplete:finish}:{
    '--entry-clear':['-15%','120%'],duration:850,ease:'inOutSine',onComplete:finish,
   });
  };
  const check=()=>{
   const elapsed=performance.now()-start;
   // A failed/blocked renderer degrades to the existing fallback, never an endless gate.
   if(elapsed>8000&&!scene.rendered&&!scene.fallback){scene.fallback=true;window.dispatchEvent(new Event('asl:webgl-lost'));}
   if(elapsed>(skipped?0:reduced?450:1350)&&fontsReady&&(scene.rendered||scene.fallback))reveal();
   if(elapsed>10000)reveal();
  };
  const skip=()=>{skipped=true;wake.progress(1);check();};
  const button=el.querySelector('button')!;button.addEventListener('click',skip);
  gsap.ticker.add(check);
  return()=>{disposed=true;gsap.ticker.remove(check);button.removeEventListener('click',skip);score.revert();exitMotion?.revert();wake.kill();content.inert=false;};
 },[]);
 return <div ref={root} className="asl-brand-loader" data-phase="prepare" role="status" aria-label="Preparing ASL experience">
  <div className="entry-texture" aria-hidden="true"/>
  <svg className="entry-atmosphere" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
   {Array.from({length:48},(_,i)=><circle className="entry-speck" key={i} cx={Math.round(hash(i,71)*1000)} cy={Math.round(hash(i,72)*700)} r={i%7===0?.8:.45}/>)}
  </svg>
  <div className="entry-disturbance" aria-hidden="true"/>
  <button className="entry-skip" type="button">Skip introduction <span aria-hidden="true">↗</span></button>
 </div>;
}
