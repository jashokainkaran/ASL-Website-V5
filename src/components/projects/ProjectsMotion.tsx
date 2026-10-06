'use client';
import {useLayoutEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {scene} from '@/lib/scene-store';
gsap.registerPlugin(ScrollTrigger);
/** One route scroll score owns archive DOM transforms and canonical material progress. */
export function ProjectsMotion({populated = false}: {populated?: boolean}) {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('.projects-page');
    if (!root) return;
    scene.archivePopulated = populated;
    const media = gsap.matchMedia();
    media.add({all: 'all', desktop: '(min-width: 701px)', reduced: '(prefers-reduced-motion: reduce)'}, context => {
      const {desktop, reduced} = context.conditions!;
      gsap.fromTo(scene, {sceneProgress: .91}, {sceneProgress: .9108, ease: 'none', scrollTrigger: {trigger: root, start: 'top top', end: 'bottom bottom', scrub: reduced ? .2 : .65}});
      gsap.to('.projects-intro h1', {y: reduced ? -12 : -85, opacity: .15, ease: 'none', scrollTrigger: {trigger: '.projects-intro', start: 'top top', end: 'bottom top', scrub: .65}});
      if (root.querySelector('.archive-publication')) {
        gsap.fromTo('.publication-copy', {y: reduced ? 12 : 65, opacity: .25}, {y: 0, opacity: 1, ease: 'sine.out', scrollTrigger: {trigger: '.archive-publication', start: 'top 75%', end: 'top 15%', scrub: .6}});
        gsap.fromTo('.archive-trace path', {strokeDashoffset: 900}, {strokeDashoffset: 0, ease: 'none', scrollTrigger: {trigger: '.archive-publication', start: 'top bottom', end: 'bottom center', scrub: .7}});
      }
      gsap.fromTo('.projects-conversion h2', {y: reduced ? 12 : 70, opacity: .15}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.projects-conversion', start: 'top 85%', end: 'top 25%', scrub: .6}});
      if (root.querySelector('.archive-aperture')) gsap.fromTo('.archive-aperture', {y: reduced ? 0 : 26}, {y: reduced ? 0 : -26, ease: 'none', scrollTrigger: {trigger: '.archive-publication', start: 'top bottom', end: 'bottom top', scrub: .65}});
      root.querySelectorAll<HTMLElement>('.project-entry').forEach(entry => {
        const visual = entry.querySelector('.project-media');
        const copy = entry.querySelector('.project-copy');
        const travel = reduced ? 0 : desktop ? 55 : 15;
        const score = gsap.timeline({scrollTrigger: {trigger: entry, start: 'top bottom', end: 'bottom top', scrub: reduced ? .2 : .65, onUpdate: self => {entry.dataset.active = self.progress > .3 && self.progress < .7 ? 'true' : 'false';}}});
        score.fromTo(visual, {y: travel, z: reduced || !desktop ? 0 : -100, scale: reduced ? 1 : desktop ? .88 : .97, filter: reduced ? 'brightness(1)' : 'brightness(.72)'}, {y: 0, z: 0, scale: 1, filter:'brightness(1)', duration: .4, ease: 'sine.out'})
          .to(visual, {y: 0, scale: 1, duration: .2}).to(visual, {y: -travel, z: reduced || !desktop ? 0 : -130, filter: reduced ? 'brightness(1)' : 'brightness(.76)', scale: reduced ? 1 : desktop ? .90 : .98, duration: .4, ease: 'sine.in'});
        if(!reduced)score.fromTo(entry.querySelector('.project-media-depth'),{clipPath:'inset(4% 3% 4% 3%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:.4,ease:'sine.out'},0);
        score.fromTo(copy, {y: reduced ? 0 : 16}, {y: 0, duration: .4}, 0).to(copy, {y: reduced ? 0 : -16, duration: .4}, .6);
      });
    }, root);
    return () => media.revert();
  }, [populated]);
  return null;
}
