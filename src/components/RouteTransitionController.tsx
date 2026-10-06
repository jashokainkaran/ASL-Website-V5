'use client';
import {useLayoutEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';
import {presetForPath, routePresets, transitionTo, cancelRouteTransition} from '@/lib/route-transition';

export function RouteTransitionController() {
  const path = usePathname();
  const previous = useRef(path);
  useLayoutEffect(() => {
    const request = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      transitionTo(presetForPath(url.pathname));
    };
    document.addEventListener('click', request, true);
    return () => {document.removeEventListener('click', request, true); cancelRouteTransition();};
  }, []);
  useLayoutEffect(() => {
    const preset = presetForPath(path);
    const changed = previous.current !== path;
    previous.current = path;
    if (changed && !(scene.routeActive && scene.routePreset === preset)) transitionTo(preset);
    scene.routePreset = preset;
    if (preset !== 'home') scene.sceneProgress = routePresets[preset].target;
    if (!changed) return;
    const main = document.querySelector<HTMLElement>('#main-content');
    let focused = false;
    const settle = () => {
      if (main) gsap.set(main, {opacity: gsap.utils.clamp(0, 1, (scene.routeProgress - .35) / .65), y: (1 - scene.routeProgress) * (scene.reduced ? 3 : 12)});
      if (scene.routeActive || focused) return;
      focused = true;
      main?.setAttribute('tabindex', '-1');
      main?.focus({preventScroll: true});
      gsap.ticker.remove(settle);
    };
    settle();
    gsap.ticker.add(settle);
    return () => {gsap.ticker.remove(settle); if(main)gsap.set(main,{clearProps:'opacity,transform'});};
  }, [path]);
  return null;
}
