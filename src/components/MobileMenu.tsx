'use client';
import Link from 'next/link';
import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';
import {animate} from 'animejs';
import {navigation} from '@/content/navigation';
export function MobileMenu(){
 const menu=useRef<HTMLDetailsElement>(null),path=usePathname();
 useEffect(()=>{
  const element=menu.current!;
  const close=(restore=false)=>{element.open=false;if(restore)element.querySelector('summary')?.focus();};
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape'&&element.open){e.preventDefault();close(true);}};
  const outside=(e:Event)=>{if(!element.contains(e.target as Node))close();};
  const wide=matchMedia('(min-width:701px)'),resize=()=>{if(wide.matches)close();};
  document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);document.addEventListener('focusin',outside);wide.addEventListener('change',resize);
  return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);document.removeEventListener('focusin',outside);wide.removeEventListener('change',resize);};
 },[]);
 return <details className="mobile-menu" ref={menu} onToggle={e=>{if(e.currentTarget.open)animate(e.currentTarget.querySelector('nav')!,{opacity:[0,1],translateY:[-5,0],duration:220,ease:'outCubic'});}}>
 <summary aria-controls="mobile-navigation">Menu</summary><nav id="mobile-navigation" aria-label="Mobile navigation">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={path===item.href?'page':undefined} onClick={()=>{if(menu.current)menu.current.open=false;}}>{item.label}</Link>)}</nav></details>;
}
