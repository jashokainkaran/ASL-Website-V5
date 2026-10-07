'use client';
import {MobileMenu} from './MobileMenu';
import {ASLLogo as Logo} from './brand/ASLLogo';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import { navigation } from '@/content/navigation';
import { bookingUrl, site } from '@/content/site';
import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {scene,tuning} from '@/lib/scene-store';
export function Header() {
 const path=usePathname();const root=useRef<HTMLElement>(null);
 useEffect(()=>{
  const el=root.current;if(!el)return;
  let reveal:gsap.core.Tween|undefined;
  const hide=()=>{if(el.dataset.revealed==='false')return;reveal?.kill();el.inert=true;el.setAttribute('aria-hidden','true');el.dataset.revealed='false';};
  const show=()=>{
   if(el.dataset.revealed==='true')return;
   const firstArrival=!scene.siteEntered;
   scene.siteEntered=true;el.inert=false;el.removeAttribute('aria-hidden');el.dataset.revealed='true';
   const items=el.querySelectorAll('.wordmark,.site-nav>a,.mobile-menu');
   if(firstArrival){reveal=gsap.fromTo(items,{opacity:0,y:scene.reduced?2:6},{opacity:1,y:0,duration:tuning.headerDuration,stagger:.05,ease:'power2.out'});}
   else{gsap.set(items,{opacity:1,y:0});}
  };
  if(path!=='/'){show();}else{hide();}
  const tick=()=>{
   if(path!=='/')return;
   if(scene.sceneProgress>=tuning.headerThreshold&&document.documentElement.dataset.entry==='ready'){show();}
   else{hide();}
  };
  gsap.ticker.add(tick);return()=>{gsap.ticker.remove(tick);reveal?.kill();};
 },[path]);
 return <header className="site-header" ref={root}><Link className="wordmark" href="/" aria-label="ASL home"><Logo className="nav-logo"/></Link><nav className="site-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={path===item.href?'page':undefined}>{item.label}</Link>)}<Link className="nav-cta" href={bookingUrl}>{site.primary} <span aria-hidden="true">↗</span></Link></nav><MobileMenu/></header>;
}
