import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scene } from '@/lib/scene-store';
import { OPENING_END } from '../states';

gsap.registerPlugin(ScrollTrigger);

/** One smoothed scroll driver writes the canonical progress for the entire page. */
export function createSceneScroll(opening: HTMLElement) {
  if (!scene.manual) scene.sceneProgress = 0;
  const pin = ScrollTrigger.create({ trigger: opening, start: 'top top', end: '+=600%', pin: true, invalidateOnRefresh: true });
  let anchors: { position: number; progress: number }[] = [];
  let distance = 1;
  const measure = () => {
    anchors = [{ position: pin.start, progress: 0 }, { position: pin.end, progress: OPENING_END }];
    const chapters = document.querySelectorAll('.capability');
    let sectionTop = pin.end + opening.clientHeight;
    chapters.forEach((element, index) => { anchors.push({ position: sectionTop + element.clientHeight / 2 - innerHeight / 2, progress: [.60, .68, .76, .85][index] }); sectionTop += element.clientHeight; });
    const statement = document.querySelector('.production-statement');
    const final = document.querySelector('.final-conversion');
    if (statement && final) {
      anchors.push({ position: sectionTop, progress: .915 });
      anchors.push({ position: sectionTop + statement.clientHeight - innerHeight, progress: .92 });
      anchors.push({ position: sectionTop + statement.clientHeight + final.clientHeight / 2 - innerHeight / 2, progress: 1 });
    }
    anchors.sort((a, b) => a.position - b.position);
    distance = anchors[anchors.length - 1].position - pin.start;
  };
  measure();
  const cursor = { value: 0 };
  const tween = gsap.to(cursor, {
    value: 1, ease: 'none',
    scrollTrigger: { trigger: opening.parentElement, start: 0, end: () => distance, scrub: .8, invalidateOnRefresh: true, onRefreshInit: measure },
    onUpdate: () => {
      if (scene.manual) return;
      const current = pin.start + cursor.value * distance;
      let index = 1;
      while (index < anchors.length - 1 && anchors[index].position < current) index++;
      const from = anchors[index - 1], to = anchors[index];
      const local = gsap.utils.clamp(0, 1, (current - from.position) / Math.max(1, to.position - from.position));
      scene.sceneProgress = gsap.utils.interpolate(from.progress, to.progress, local);
    },
  });
  const skip = opening.querySelector<HTMLAnchorElement>('.skip-sequence');
  const jump = (event: Event) => { event.preventDefault(); window.scrollTo({ top: pin.end, behavior: 'smooth' }); };
  skip?.addEventListener('click', jump);
  ScrollTrigger.refresh();
  return () => { skip?.removeEventListener('click', jump); tween.scrollTrigger?.kill(); tween.kill(); pin.kill(); };
}
