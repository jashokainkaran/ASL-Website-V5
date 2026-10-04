'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';
import {editorialScore,progressBetween} from '@/lib/editorial-motion';
export function HomeChoreography(){
 useEffect(()=>{
  const chapters=Array.from(document.querySelectorAll<HTMLElement>('.capability'));
  const centers=[.60,.68,.76,.85];
  const scores:gsap.core.Timeline[]=[];
  const later=Array.from(document.querySelectorAll<HTMLElement>('.production-statement,.final-conversion'));
  const laterScores:gsap.core.Timeline[]=[];
  const context=gsap.context(()=>{chapters.forEach(el=>scores.push(editorialScore(el,matchMedia('(prefers-reduced-motion: reduce)').matches)));later.forEach(el=>laterScores.push(editorialScore(el,matchMedia('(prefers-reduced-motion: reduce)').matches)));});
  const residue=document.querySelector<SVGElement>('.residual-matter');
  let previous=-1;
  const render=()=>{
   const p=scene.fallback?1:scene.sceneProgress;
   if(p===previous)return;previous=p;
   laterScores.forEach((score,i)=>score.progress(scene.fallback?1:progressBetween(p,i?.928:.875,i?.98:.914)));
   if(residue){residue.style.opacity=String(scene.fallback?.4:progressBetween(p,.50,.59)*.65);residue.style.transform=`translateY(${(p-.5)*(scene.reduced?-12:-40)}px)`;}
   chapters.forEach((el,i)=>{
    scores[i].progress(scene.fallback?1:progressBetween(p,centers[i]-.06,centers[i]-.012));
    const exit=scene.fallback?0:progressBetween(p,centers[i]+.035,centers[i]+.08);
    el.style.setProperty('--chapter-exit',String(exit));
    el.style.setProperty('--chapter-travel',`${exit*(scene.reduced?-6:-24)}px`);
   });
  };
  const focus=(event:FocusEvent)=>{
   const chapter=(event.target as Element).closest<HTMLElement>('.capability');
   if(!chapter)return;
   scores[chapters.indexOf(chapter)]?.progress(1);
   chapter.style.setProperty('--chapter-exit','0');
   const rect=chapter.getBoundingClientRect();
   if(rect.top < -20 || rect.bottom>innerHeight+20)chapter.scrollIntoView({behavior:scene.reduced?'auto':'smooth',block:'center'});
  };
  gsap.ticker.add(render);document.addEventListener('focusin',focus);
  return()=>{gsap.ticker.remove(render);document.removeEventListener('focusin',focus);context.revert();};
 },[]);
 return null;
}
