'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {scene} from '@/lib/scene-store';
import {site,bookingUrl} from '@/content/site';
gsap.registerPlugin(ScrollTrigger);
export function Opening(){const root=useRef<HTMLElement>(null);useEffect(()=>{const mm=gsap.matchMedia();const timer=setTimeout(()=>mm.add('(prefers-reduced-motion: no-preference)',()=>{if(scene.fallback)return;const context=gsap.context(()=>{const state={progress:0};gsap.set('.hero-copy',{autoAlpha:0,y:24});gsap.set('.hero-copy a',{attr:{tabindex:-1}});gsap.to(state,{progress:1,ease:'none',scrollTrigger:{trigger:root.current,start:'top top',end:'+=600%',pin:true,scrub:.8,invalidateOnRefresh:true},onUpdate:()=>{if(!scene.manual)scene.sceneProgress=state.progress;}});const render=()=>{const p=scene.fallback?1:scene.sceneProgress;const reveal=gsap.utils.clamp(0,1,(p-.94)/.055);gsap.set('.hero-copy',{autoAlpha:reveal,y:24*(1-reveal)});gsap.set('.hero-copy a',{attr:{tabindex:reveal>.8?0:-1}});gsap.set('.opening-foot',{opacity:1-reveal});};gsap.ticker.add(render);return()=>gsap.ticker.remove(render);},root);return()=>context.revert();}),100);return()=>{clearTimeout(timer);mm.revert();};},[]);
 return <section className="opening" ref={root} aria-label="Mutable Matter opening"><div className="opening-label eyebrow">{site.label}</div><div className="hero-copy"><h1>Digital matter,<br/><em>given form.</em></h1><div className="hero-details"><p>{site.description}</p><div className="cta-row"><Link className="button" href={bookingUrl}>{site.primary}<span aria-hidden="true">↗</span></Link><Link className="text-link" href="/work">{site.secondary}<span aria-hidden="true">↗</span></Link></div></div></div><div className="opening-foot eyebrow"><span>ONE MATERIAL. INFINITE POSSIBILITY.</span><span>SCROLL TO SHAPE <span aria-hidden="true">↓</span></span></div></section>;
}
