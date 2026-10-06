 'use client';
import {useEffect,useRef} from 'react';
import {createTimeline,animate,stagger,type JSAnimation} from 'animejs';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';
import {startHomeIntro} from '@/lib/home-intro';
import {hash} from '@/particles/formations/shared';
import {ASLMark} from './ASLMark';
import {getASLMarkPoints} from '@/particles/logo/path';
import {presetForPath,transitionTo} from '@/lib/route-transition';
const identityPoints=getASLMarkPoints(240);

/** Opaque server-rendered sibling, present before React or WebGL can initialise. */
export function ASLLoader(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=root.current!,html=document.documentElement,content=document.getElementById('site-interface')!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let start=performance.now(),fontsReady=false,exiting=false,disposed=false,skipped=false;
  let home=location.pathname==='/',exitMotion:JSAnimation|undefined,releaseMotion:JSAnimation|undefined;
  let score:ReturnType<typeof createTimeline>;
  document.fonts.ready.then(()=>{if(!disposed)fontsReady=true;});
  const prepare=(isHome:boolean)=>{
   home=isHome;start=performance.now();exiting=false;skipped=false;
   score?.revert();exitMotion?.cancel();releaseMotion?.cancel();
   el.hidden=false;el.style.opacity='1';el.dataset.phase='prepare';el.dataset.kind=home?'home':'inner';
   content.inert=true;html.dataset.entry='pending';scene.entryProgress=0;
   scene.awakening=1;scene.homeIntro=home?0:1;
   const mark=el.querySelector<SVGElement>('.entry-identity')!;
   mark.style.visibility='hidden';
   const particles=el.querySelector<SVGElement>('.entry-material')!;
   particles.style.visibility=home?'hidden':'visible';
   score=createTimeline({autoplay:false});
   score.add(el.querySelector('.entry-texture')!,{opacity:[0,.035],duration:650,ease:'inOutSine'},120)
    .add(el.querySelectorAll('.entry-speck'),{opacity:[0,.24],translateX:[reduced?0:-8,0],delay:stagger(5),duration:700,ease:'inOutSine'},300);
   if(!reduced)score.add(el.querySelector('.entry-disturbance')!,{translateX:['-90%','90%'],opacity:[0,.22,0],duration:850,ease:'inOutSine'},450);
   if(!home)score.add(el.querySelectorAll('.entry-matter'),{
    translateX:(_el:unknown,i=0)=>[(hash(i,81)-.5)*(reduced?30:180),0],
    translateY:(_el:unknown,i=0)=>[(hash(i,82)-.5)*(reduced?25:140),0],
    opacity:[0,1],delay:stagger(1.1),duration:620,ease:'outCubic'
   },180);
   gsap.ticker.add(check);
  };
  const finish=()=>{
   el.hidden=true;content.inert=false;html.dataset.entry='ready';scene.entryProgress=1;
   if(home)startHomeIntro();else transitionTo(presetForPath(location.pathname),true);
   if(skipped)content.querySelector<HTMLAnchorElement>('.skip-link')?.focus();
  };
  const reveal=()=>{
   if(exiting)return;exiting=true;gsap.ticker.remove(check);el.dataset.phase='reveal';
   if(!home&&!skipped)releaseMotion=animate(el.querySelectorAll('.entry-matter'),{translateX:(_el:unknown,i=0)=>(hash(i,83)-.5)*(reduced?4:16),translateY:(_el:unknown,i=0)=>(hash(i,84)-.5)*(reduced?4:12),opacity:[1,.35],duration:380,ease:'inOutSine'});
   exitMotion=animate(el,{opacity:[1,0],duration:skipped?180:reduced?300:home?500:400,ease:'inOutSine',onComplete:finish});
  };
  function check(){
   const elapsed=performance.now()-start;
   if(!scene.entryDebug)scene.entryProgress=Math.min(.75,elapsed/(home?1600:1500));
   score.seek(scene.entryProgress*1600);
   if(elapsed>8000&&!scene.rendered&&!scene.fallback){scene.fallback=true;window.dispatchEvent(new Event('asl:webgl-lost'));}
   const ready=fontsReady&&(scene.rendered||scene.fallback);
   if(!scene.entryDebug&&elapsed>(skipped?0:home?(reduced?400:1100):1200)&&ready)reveal();
   if(elapsed>10000&&!scene.entryDebug)reveal();
  }
  const skip=()=>{skipped=true;scene.entryDebug=false;check();};
  const replay=(event:Event)=>prepare((event as CustomEvent<string>).detail!=='inner');
  const button=el.querySelector('button')!;button.addEventListener('click',skip);
  if(process.env.NODE_ENV==='development')window.addEventListener('asl:entry-replay',replay);
  prepare(home);
  return()=>{disposed=true;gsap.ticker.remove(check);button.removeEventListener('click',skip);window.removeEventListener('asl:entry-replay',replay);score.revert();exitMotion?.cancel();releaseMotion?.cancel();content.inert=false;};
 },[]);
 return <div ref={root} className="asl-brand-loader" data-phase="prepare" role="status" aria-label="Preparing ASL experience">
  <div className="entry-texture" aria-hidden="true"/>
  <svg className="entry-atmosphere" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
   {Array.from({length:32},(_,i)=><circle className="entry-speck" key={i} cx={Math.round(hash(i,71)*1000)} cy={Math.round(hash(i,72)*700)} r={i%7===0?.8:.45}/>)}
  </svg>
  <div className="entry-disturbance" aria-hidden="true"/>
  <ASLMark className="entry-identity"/>
  <svg className="entry-material" viewBox="-120 -100 240 200" aria-hidden="true">
   {Array.from({length:240},(_,i)=><circle className="entry-matter" key={i} cx={identityPoints[i*3]*35} cy={-identityPoints[i*3+1]*35} r={i%9===0?.85:.55}/>)}
  </svg>
  <button className="entry-skip" type="button">Skip introduction <span aria-hidden="true">↗</span></button>
 </div>;
}
