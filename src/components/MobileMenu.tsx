'use client';
import Link from 'next/link';
import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';
import {animate,stagger,type JSAnimation} from 'animejs';
import {navigation} from '@/content/navigation';
export function MobileMenu(){
 const entry=useRef<JSAnimation|null>(null);
 const menu=useRef<HTMLDetailsElement>(null),path=usePathname();
 useEffect(()=>{
  const element=menu.current!;
  const close=(restore=false)=>{element.open=false;if(restore)element.querySelector('summary')?.focus();};
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape'&&element.open){e.preventDefault();close(true);}};
  const outside=(e:Event)=>{if(!element.contains(e.target as Node))close();};
  const wide=matchMedia('(min-width:701px)'),resize=()=>{if(wide.matches)close();};
  document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);document.addEventListener('focusin',outside);wide.addEventListener('change',resize);
  return()=>{entry.current?.revert();document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);document.removeEventListener('focusin',outside);wide.removeEventListener('change',resize);};
 },[]);
 return <details className="mobile-menu" ref={menu} onToggle={e=>{entry.current?.revert();if(e.currentTarget.open)entry.current=animate(e.currentTarget.querySelectorAll('nav a'),{opacity:[0,1],translateY:[matchMedia('(prefers-reduced-motion: reduce)').matches?3:9,0],delay:stagger(30),duration:220,ease:'outCubic'});}}>
 <summary aria-controls="mobile-navigation">Menu</summary><nav id="mobile-navigation" aria-label="Mobile navigation">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={path===item.href?'page':undefined} onClick={()=>{if(menu.current)menu.current.open=false;}}>{item.label}</Link>)}</nav></details>;
}
