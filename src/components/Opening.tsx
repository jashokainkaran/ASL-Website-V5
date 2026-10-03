'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { OPENING_END } from '@/particles/states';
import { createSceneScroll } from '@/particles/engine/scroll';
import { scene } from '@/lib/scene-store';
import { site, bookingUrl } from '@/content/site';

export function Opening() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    const timer = setTimeout(() => media.add('(prefers-reduced-motion: no-preference)', () => {
      if (scene.fallback || !root.current) return;
      const element = root.current;
      const copy = element.querySelector('.hero-copy');
      const links = element.querySelectorAll('.hero-copy a');
      const foot = element.querySelector('.opening-foot');
      const skip = element.querySelector('.skip-sequence');
      const context = gsap.context(() => {
        gsap.set(copy, { autoAlpha: 0, y: 24 });
        gsap.set(links, { attr: { tabindex: -1 } });
      }, element);
      const disposeScroll = createSceneScroll(element);
      let last = -1;
      const render = () => {
        const p = scene.fallback ? 1 : scene.sceneProgress / OPENING_END;
        const reveal = gsap.utils.clamp(0, 1, (p - .94) / .055);
        if (reveal === last) return;
        last = reveal;
        gsap.set(copy, { autoAlpha: reveal, y: 24 * (1 - reveal) });
        gsap.set(links, { attr: { tabindex: reveal > .8 ? 0 : -1 } });
        gsap.set([foot, skip], { autoAlpha: 1 - reveal });
      };
      const lost = () => { disposeScroll(); render(); };
      window.addEventListener('asl:webgl-lost', lost);
      gsap.ticker.add(render);
      return () => { window.removeEventListener('asl:webgl-lost', lost); gsap.ticker.remove(render); disposeScroll(); context.revert(); };
    }), 120);
    return () => { clearTimeout(timer); media.revert(); };
  }, []);
  return <section className="opening" ref={root} aria-label="Mutable Matter opening">
    <div className="opening-label eyebrow">{site.label}</div>
    <a className="skip-sequence eyebrow" href="#introduction">{site.skipLabel} <span aria-hidden="true">↘</span></a>
    <div className="hero-copy" id="introduction">
      <h1>{site.headlineFirst}<br /><em>{site.headlineLast}</em></h1>
      <div className="hero-details"><div className="eyebrow hero-specialism">{site.specialism}</div><p>{site.description}</p>
        <div className="cta-row"><Link className="button" href={bookingUrl}>{site.primary}<span aria-hidden="true">↗</span></Link><Link className="text-link" href="/work">{site.secondary}<span aria-hidden="true">↗</span></Link></div>
      </div>
    </div>
    <div className="opening-foot eyebrow"><span>{site.openingLine}</span><span>{site.scrollLabel} <span aria-hidden="true">↓</span></span></div>
  </section>;
}
