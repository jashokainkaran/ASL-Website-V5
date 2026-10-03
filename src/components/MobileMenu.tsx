'use client';
import Link from 'next/link';
import {useRef} from 'react';
import {navigation} from '@/content/navigation';
export function MobileMenu(){const menu=useRef<HTMLDetailsElement>(null);return <details className="mobile-menu" ref={menu}><summary>Menu</summary><nav aria-label="Mobile navigation">{navigation.map(item=><Link key={item.href} href={item.href} onClick={()=>menu.current?.removeAttribute('open')}>{item.label}</Link>)}</nav></details>;}
