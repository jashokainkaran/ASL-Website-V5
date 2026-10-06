'use client';
import {useLayoutEffect} from 'react';
import {animate, stagger} from 'animejs';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';

/** Event-driven editorial arrival; scroll transforms belong to ProjectsMotion. */
export function RouteEditorialMotion({selector}: {selector: string}) {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>(selector);
    if (!root) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.dataset.editorial = 'pending';
    const isContact = root.classList.contains('contact-page');
    const motions: ReturnType<typeof animate>[] = [];
    const reveal = () => {
      if (document.documentElement.dataset.entry !== 'ready' || scene.routeProgress < .65) return;
      gsap.ticker.remove(reveal);
      root.dataset.editorial = 'revealing';
      motions.push(animate(root.querySelectorAll('[data-editorial-line]'), {
        translateY: [reduced ? '35%' : '110%', '0%'], opacity: [.3, 1],
        duration: reduced ? 550 : 1000, delay: stagger(100), ease: 'outCubic',
      }));
      motions.push(animate(root.querySelectorAll('[data-editorial-detail]'), {
        translateY: [reduced ? 4 : 18, 0], opacity: [0, 1],
        duration: 650, delay: stagger(110, {start: isContact ? 480 : 300}), ease: 'outCubic',
      }));
      if(isContact)motions.push(animate(root.querySelectorAll('.enquiry-form > .form-pair,.enquiry-form > .enquiry-field,.enquiry-submit'), {translateY:[reduced?2:9,0],opacity:[0,1],duration:550,delay:stagger(80,{start:720}),ease:'outCubic'}));
    };
    gsap.ticker.add(reveal);
    return () => {
      gsap.ticker.remove(reveal);
      motions.forEach(motion => motion.revert());
      delete root.dataset.editorial;
    };
  }, [selector]);
  return null;
}
