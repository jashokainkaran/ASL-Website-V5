'use client';
import dynamic from 'next/dynamic';
import {useEffect,useState} from 'react';
import {SceneEnvironment} from '@/particles/engine/SceneEnvironment';
import {Logo} from './Logo';
import {scene} from '@/lib/scene-store';
const ExperienceCanvas=dynamic(()=>import('@/particles/engine/ExperienceCanvas'),{ssr:false});
const DevTools=process.env.NODE_ENV==='development'?dynamic(()=>import('@/particles/engine/DevTools'),{ssr:false}):null;
export function ExperienceShell(){const [enabled,setEnabled]=useState(false);useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{const test=document.createElement('canvas');const context=test.getContext('webgl2');const supported=!!context;context?.getExtension('WEBGL_lose_context')?.loseContext();scene.fallback=media.matches||!supported;document.documentElement.dataset.motion=scene.fallback?'static':'full';setEnabled(!scene.fallback);};const lost=()=>{scene.fallback=true;document.documentElement.dataset.motion='static';setEnabled(false);};window.addEventListener('asl:webgl-lost',lost);const id=requestAnimationFrame(update);media.addEventListener('change',update);return()=>{window.removeEventListener('asl:webgl-lost',lost);cancelAnimationFrame(id);media.removeEventListener('change',update);};},[]);return <><SceneEnvironment/><div className="canvas-layer" aria-hidden="true"><div className="static-mark"><Logo/></div>{enabled&&<ExperienceCanvas/>}</div>{DevTools&&<DevTools/>}</>;}
