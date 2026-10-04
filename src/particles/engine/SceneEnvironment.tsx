'use client';
import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';
export function SceneEnvironment(){const path=usePathname();const previous=useRef(path);useEffect(()=>{const css=getComputedStyle(document.documentElement);const colors=Object.fromEntries(['--color-void','--color-ink','--color-wine','--color-burgundy'].map(name=>[name,css.getPropertyValue(name).trim()]));const color=(name:string)=>colors[name];const layer=document.querySelector('.canvas-layer');const header=document.querySelector('.site-header');const home=path==='/'||path==='/lab/mutable-matter';document.documentElement.dataset.page=home?'home':'inner';
 const target=path==='/capabilities'?.60:path==='/contact'?1:.915;
 const changed=previous.current!==path;previous.current=path;
 const tween=gsap.timeline();
 if(!home){
  if(changed&&!scene.fallback){
   scene.routeMix=0;
   tween.to(scene,{routeMix:1,duration:.32,ease:'power2.inOut'})
    .call(()=>{scene.sceneProgress=target;})
    .to(scene,{routeMix:0,duration:.38,ease:'power2.inOut'});
  }else tween.to(scene,{sceneProgress:target,duration:.7,ease:'power2.inOut'});
 }else scene.routeMix=0;
 const update=()=>{const p=scene.sceneProgress;let background=color('--color-void');if(p>.52)background=gsap.utils.interpolate(color('--color-void'),color('--color-ink'),Math.min(1,(p-.52)/.06));if(p>.92)background=gsap.utils.interpolate(color('--color-ink'),color('--color-wine'),Math.min(1,(p-.92)/.08));if(path==='/about')background=color('--color-burgundy');if(scene.routeMix>0)background=color('--color-void');document.documentElement.dataset.identity=scene.routeMix>0?'transition':'rest';if(scene.fallback&&path==='/contact')background=color('--color-wine');gsap.set(layer,{backgroundColor:background});const statementMix=scene.routeMix>0?0:home?gsap.utils.clamp(0,1,(p-.86)/.05)*(1-gsap.utils.clamp(0,1,(p-.92)/.045)):path==='/about'?1:0;const headerColor=gsap.utils.interpolate(background,color('--color-burgundy'),statementMix);(header as HTMLElement|null)?.style.setProperty('--header-surface',headerColor);document.documentElement.dataset.stage=p>.52&&p<.86?'capabilities':p>=.92?'final':'opening';};gsap.ticker.add(update);return()=>{tween.kill();scene.routeMix=0;gsap.ticker.remove(update);};},[path]);return null;}
