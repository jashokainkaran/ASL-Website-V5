'use client';
import {MobileMenu} from './MobileMenu';
import {ASLLogo as Logo} from './brand/ASLLogo';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import { navigation } from '@/content/navigation';
import { bookingUrl, site } from '@/content/site';
export function Header() { const path=usePathname(); return <header className="site-header"><Link className="wordmark" href="/" aria-label="ASL home"><Logo className="nav-logo"/></Link><nav className="site-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={path===item.href?'page':undefined}>{item.label}</Link>)}<Link className="nav-cta" href={bookingUrl}>{site.primary} <span aria-hidden="true">↗</span></Link></nav><MobileMenu/></header>; }
