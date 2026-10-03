'use client';
import { useEffect } from 'react';
export function HomeChoreography() {
  useEffect(() => {
    const focus = (event: FocusEvent) => {
      const chapter = (event.target as Element).closest<HTMLElement>('.capability');
      if (!chapter) return;
      const rect = chapter.getBoundingClientRect();
      if (rect.top < -20 || rect.bottom > innerHeight + 20) chapter.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    };
    document.addEventListener('focusin', focus);
    return () => document.removeEventListener('focusin', focus);
  }, []);
  return null;
}
