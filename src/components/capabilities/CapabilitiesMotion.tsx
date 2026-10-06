'use client';
import {useLayoutEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {scene} from '@/lib/scene-store';
gsap.registerPlugin(ScrollTrigger);
/** One GSAP score maps native route scroll onto the existing formation windows. */
export function CapabilitiesMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('.capabilities-page');
    if (!root) return;
    const media = gsap.matchMedia();
    media.add({all: 'all', reduced: '(prefers-reduced-motion: reduce)'}, context => {
      const reduced = context.conditions!.reduced;
      const chapters = [...root.querySelectorAll<HTMLElement>('.service-chapter')];
      const connection = root.querySelector<HTMLElement>('.capabilities-connect')!;
      const score = {value: .52};
      let intro: gsap.core.Tween | undefined;
      let arrived = false;
      let points: {offset: number; progress: number}[] = [];
      const measure = () => {
        const vh = window.innerHeight;
        points = [{offset: 0, progress: .52}];
        chapters.forEach((chapter, index) => {
          points.push({offset: Math.max(1, chapter.offsetTop - vh * .85), progress: [.52, .61, .69, .77][index]});
          points.push({offset: chapter.offsetTop - vh * .12, progress: [.59, .67, .75, .84][index]});
        });
        points.push({offset: connection.offsetTop, progress: .91});
      };
      measure();
      const trigger = ScrollTrigger.create({trigger: root, start: 'top top', endTrigger: connection, end: 'top top', onRefresh: measure,
        onUpdate: self => {
          if(self.progress>0){intro?.kill();arrived=true;}
          const offset = self.progress * (self.end - self.start);
          let to = points.findIndex(point => point.offset >= offset);
          if (to < 1) to = offset <= 0 ? 1 : points.length - 1;
          const a = points[to - 1], b = points[to];
          score.value = gsap.utils.interpolate(a.progress, b.progress, gsap.utils.clamp(0, 1, (offset - a.offset) / Math.max(1, b.offset - a.offset)));
        },
      });
      const update = () => {
        if(scene.routePreset!=='capabilities'||scene.routeActive||document.documentElement.dataset.entry!=='ready')return;
        if(!arrived){arrived=true;intro=gsap.to(score,{value:.535,duration:reduced?.6:1.25,ease:'sine.inOut'});}
        scene.sceneProgress=score.value;
      };
      gsap.ticker.add(update);
      chapters.forEach(chapter => {
        gsap.fromTo(chapter.querySelector('.service-rule'), {scaleX: .12}, {scaleX: 1, ease: 'none', scrollTrigger: {trigger: chapter, start: 'top 90%', end: 'top 15%', scrub: .4}});
        gsap.fromTo(chapter.querySelector('.service-copy'), {y: reduced ? 3 : 30}, {y: 0, ease: 'sine.out', scrollTrigger: {trigger: chapter, start: 'top 85%', end: 'top 10%', scrub: .5}});
      });
      return () => {intro?.kill();trigger.kill(); gsap.ticker.remove(update);};
    }, root);
    return () => media.revert();
  }, []);
  return null;
}
