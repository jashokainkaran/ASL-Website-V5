'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {scene} from '@/lib/scene-store';

/** Focus input is constant-cost; the GPU retains all particle motion. */
export function ContactMatter() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.contact-page');
    if (!root) return;
    let motion: gsap.core.Tween | undefined;
    const focus = (event: FocusEvent) => {
      const field = event.target as HTMLElement;
      if (!field.matches('input:not([name="website"]),textarea,select')) return;
      const box = field.getBoundingClientRect();
      scene.contactFocus.x = (box.left + box.width / 2) / innerWidth - .5;
      scene.contactFocus.y = .5 - (box.top + box.height / 2) / innerHeight;
      motion?.kill();
      motion = gsap.to(scene.contactFocus, {strength: 1, duration: .5});
    };
    const release = () => {
      motion?.kill();
      motion = gsap.to(scene.contactFocus, {strength: 0, duration: .7});
    };
    root.addEventListener('focusin', focus);
    root.addEventListener('focusout', release);
    return () => {
      root.removeEventListener('focusin', focus);
      root.removeEventListener('focusout', release);
      motion?.kill();scene.contactFocus.strength=0;scene.contactReceipt=0;
    };
  }, []);
  return null;
}
