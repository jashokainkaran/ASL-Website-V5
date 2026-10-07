'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {Phrase,Rule} from './motion/Editorial';
import {editorialScore} from '@/lib/editorial-motion';
import { homeStory, homeIdentity } from '@/content/home-story';
import { OPENING_END } from '@/particles/states';
import { createSceneScroll } from '@/particles/engine/scroll';
import { scene } from '@/lib/scene-store';
import { site, bookingUrl } from '@/content/site';

export function Opening() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    let cleanup: (()=>void)|undefined;
    const start=()=>{
      if(cleanup)return;
      if (!root.current) return;
      const element = root.current;
      const copy = element.querySelector('.hero-copy');
      const links = element.querySelectorAll('.hero-copy a');
      const foot = element.querySelector('.opening-foot');
      const beats = element.querySelectorAll<HTMLElement>('.story-beat');
      const skip = element.querySelector('.skip-sequence');
      let score:gsap.core.Timeline;
      const context = gsap.context(() => {
        score=editorialScore(copy!,scene.reduced);
        gsap.set(copy, { autoAlpha: 0 });
        gsap.set(links, { attr: { tabindex: -1 } });
      }, element);
      const disposeScroll = createSceneScroll(element);
      let last = -1;
      const render = () => {
        document.documentElement.style.setProperty("--home-identity",String(gsap.utils.clamp(0,1,(scene.sceneProgress-.465)/.029)));
        beats.forEach((el,i)=>{const beat=homeStory[i];const progress=scene.sceneProgress;const enter=i===0&&progress<beat.hold?scene.homeIntro:gsap.utils.clamp(0,1,(progress-beat.enter)/(beat.hold-beat.enter));const exit=gsap.utils.clamp(0,1,(progress-beat.exit)/(beat.end-beat.exit));const alpha=Math.min(enter,1-exit);el.style.opacity=String(alpha);el.style.visibility=alpha>.001?"visible":"hidden";el.style.transform=`translateY(${(1-enter)*(scene.reduced?3:12)-exit*4}px)`;el.setAttribute("aria-hidden",String(alpha<.1));});
        element.dataset.story=String(homeStory.findIndex(beat=>scene.sceneProgress>=beat.enter&&scene.sceneProgress<beat.end));
        const reveal = gsap.utils.clamp(0, 1, (scene.sceneProgress - homeIdentity.hero) / (OPENING_END-homeIdentity.hero));
        (copy as HTMLElement).style.setProperty("--handoff",String(gsap.utils.clamp(0,1,(scene.sceneProgress-OPENING_END)/.025)));
        // The instruction belongs to arrival, not to the whole narrative.
        gsap.set(foot, { autoAlpha: 1-gsap.utils.clamp(0,1,scene.sceneProgress/.025) });
        if (reveal === last) return;
        last = reveal;
        gsap.set(copy, { autoAlpha: reveal > 0 ? 1 : 0 });
        score.progress(reveal);
        gsap.set(links, { attr: { tabindex: reveal > .8 ? 0 : -1 } });
        gsap.set(skip, { autoAlpha: 1 - reveal });
      };
      const lost = () => { render(); };
      window.addEventListener('asl:webgl-lost', lost);
      gsap.ticker.add(render);
      cleanup = () => { window.removeEventListener('asl:webgl-lost', lost); gsap.ticker.remove(render); disposeScroll(); context.revert(); };
    };
    if(scene.checked)start();
    window.addEventListener('asl:capability-ready',start);
    return()=>{window.removeEventListener('asl:capability-ready',start);cleanup?.();};
  }, []);
  return <section className="opening" data-environment="SPACE_BLACK" ref={root} aria-label="Mutable Matter opening">
    <div className="home-story" aria-label="From possibility to digital experience">{homeStory.map((beat,i)=><div className={`story-beat story-beat-${i+1}`} key={beat.name} aria-hidden="true"><span className="story-index eyebrow" aria-hidden="true">0{i+1}</span><p>{beat.text.map(line=><span key={line}>{line}</span>)}</p></div>)}</div>
    <a className="skip-sequence eyebrow" href="#introduction">Skip intro <span aria-hidden="true">↘</span></a>
    <div className="hero-copy" id="introduction" tabIndex={-1}>
      <Rule className="hero-rule"/><h1><Phrase>{site.headlineFirst}</Phrase><Phrase>{site.headlineLast}</Phrase></h1>
      <div className="hero-details"><div data-reveal="detail" className="eyebrow hero-specialism">{site.specialism}</div><p data-reveal="detail">{site.description}</p>
        <div data-reveal="action" className="cta-row"><Link className="button" href={bookingUrl}>{site.primary}<span aria-hidden="true">↗</span></Link><Link className="text-link" href="/projects">{site.secondary}<span aria-hidden="true">↗</span></Link></div>
      </div>
    </div>
    <div className="opening-foot eyebrow"><span>Scroll to shape <span aria-hidden="true">↓</span></span></div>
  </section>;
}
