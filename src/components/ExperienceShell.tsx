'use client';
import dynamic from 'next/dynamic';
const ExperienceCanvas = dynamic(() => import('@/particles/engine/ExperienceCanvas'), { ssr: false });
export function ExperienceShell() { return <div className="canvas-layer" aria-hidden="true"><ExperienceCanvas /></div>; }
