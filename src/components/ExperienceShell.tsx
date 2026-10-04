'use client';
import dynamic from 'next/dynamic';
import {useEffect,useState} from 'react';
import {SceneEnvironment} from '@/particles/engine/SceneEnvironment';
import {Logo} from './Logo';
import {scene} from '@/lib/scene-store';
const ExperienceCanvas=dynamic(()=>import('@/particles/engine/ExperienceCanvas'),{ssr:false});
const DevTools=process.env.NODE_ENV==='development'?dynamic(()=>import('@/particles/engine/DevTools'),{ssr:false}):null;
export function ExperienceShell(){
 const [enabled,setEnabled]=useState(false);
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  const intensity=()=>{scene.reduced=media.matches;};
  const test=document.createElement('canvas');
  let supported=false;
  try {const context=test.getContext('webgl2');supported=!!context;context?.getExtension('WEBGL_lose_context')?.loseContext();}catch{/* No-WebGL uses the canonical SVG. */}
  const frame=requestAnimationFrame(()=>{
   intensity();scene.fallback=!supported;scene.checked=true;
   document.documentElement.dataset.motion=supported?'full':'static';setEnabled(supported);
   window.dispatchEvent(new Event('asl:capability-ready'));
  });
  const lost=()=>{scene.fallback=true;document.documentElement.dataset.motion='static';setEnabled(false);};
  window.addEventListener('asl:webgl-lost',lost);media.addEventListener('change',intensity);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('asl:webgl-lost',lost);media.removeEventListener('change',intensity);};
 },[]);
 return <><SceneEnvironment/><div className="canvas-layer" aria-hidden="true"><div className="material-field"/><div className="static-mark"><Logo/></div>{enabled&&<ExperienceCanvas/>}</div>{DevTools&&<DevTools/>}</>;
}
