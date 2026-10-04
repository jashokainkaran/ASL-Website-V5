'use client';
import {useEffect} from 'react';
import {animate,type JSAnimation} from 'animejs';
export function LinkMotion(){useEffect(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const animations=new Map<Element,JSAnimation>();
 let active:HTMLElement|null=null,rect:DOMRect|null=null;
 const motion=(el:Element,params:Parameters<typeof animate>[1])=>{animations.get(el)?.cancel();animations.set(el,animate(el,{...params,onComplete:()=>animations.delete(el)}));};
 const run=(event:Event,enter:boolean)=>{
  const link=(event.target as Element).closest<HTMLElement>('.button,.text-link,.nav-cta');
  if(!link)return;
  if(event instanceof PointerEvent&&event.relatedTarget instanceof Node&&link.contains(event.relatedTarget))return;
  const arrow=link.querySelector('span');
  if(arrow)motion(arrow,{translateX:enter?(reduced.matches?1:3):0,translateY:enter?(reduced.matches?-1:-3):0,duration:240,ease:'outCubic'});
  if(event instanceof PointerEvent&&event.pointerType==='mouse'&&link.matches('.button,.nav-cta')){
   if(enter){active=link;rect=link.getBoundingClientRect();}
   else{motion(link,{translateX:0,translateY:0,duration:280,ease:'outCubic'});active=null;rect=null;}
  }
 };
 const move=(e:PointerEvent)=>{if(!active||!rect)return;const max=reduced.matches?1.5:4;
  motion(active,{translateX:Math.max(-max,Math.min(max,(e.clientX-rect.x-rect.width/2)/rect.width*max*2)),translateY:Math.max(-max,Math.min(max,(e.clientY-rect.y-rect.height/2)/rect.height*max*2)),duration:160,ease:'outCubic'});
 };
 const enter=(e:Event)=>run(e,true),leave=(e:Event)=>run(e,false);
 document.addEventListener('pointerover',enter);document.addEventListener('pointerout',leave);document.addEventListener('focusin',enter);document.addEventListener('focusout',leave);document.addEventListener('pointermove',move,{passive:true});
 return()=>{document.removeEventListener('pointerover',enter);document.removeEventListener('pointerout',leave);document.removeEventListener('focusin',enter);document.removeEventListener('focusout',leave);document.removeEventListener('pointermove',move);animations.forEach(a=>a.cancel());};
},[]);return null;}
