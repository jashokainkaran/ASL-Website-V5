import gsap from 'gsap';
import {scene} from './scene-store';
/** Home mode of the existing entry controller. No overlay, scroll lock or new frame loop. */
export function awakenEnvironment(){
 const root=document.documentElement;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 scene.awakening=0;
 const paint=()=>{
  root.style.setProperty('--arrival-texture',String(gsap.utils.clamp(0,1,scene.awakening*3)));
  root.style.setProperty('--arrival-ui',String(.25+.75*gsap.utils.clamp(0,1,(scene.awakening-.55)/.4)));
 };
 const finish=()=>{scene.awakening=1;paint();};
 paint();
 const animation=gsap.to(scene,{awakening:1,duration:reduced?.65:1.6,ease:reduced?'power1.out':'none',onUpdate:paint,onComplete:finish});
 const skip=()=>{animation.progress(1);};
 for(const event of ['pointerdown','keydown','wheel','touchstart'])window.addEventListener(event,skip,{passive:true,once:true});
 return()=>{animation.kill();finish();for(const event of ['pointerdown','keydown','wheel','touchstart'])window.removeEventListener(event,skip);};
}
