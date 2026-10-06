import gsap from 'gsap';
import {scene} from './scene-store';
import {finishHomeIntro} from './home-intro';

export type RoutePreset = 'home' | 'work' | 'project' | 'capabilities' | 'about' | 'contact';
export const routePresets = {
  home: {verb: 'transform', target: 0, code: 0},
  work: {verb: 'explore', target: .91, code: 1},
  project: {verb: 'focus', target: .91, code: 2},
  capabilities: {verb: 'organise', target: .60, code: 3},
  about: {verb: 'connect', target: .91, code: 4},
  contact: {verb: 'attract', target: 1, code: 5},
} as const;

export function presetForPath(path: string): RoutePreset {
  return path.startsWith('/work/') || path.startsWith('/projects/') ? 'project' : path === '/work' || path === '/projects' ? 'work' : path === '/capabilities' ? 'capabilities' : path === '/about' ? 'about' : path === '/contact' ? 'contact' : 'home';
}

let motion: gsap.core.Tween | undefined;
/** Navigation-independent semantic request; links and history keep their native behaviour. */
export function transitionTo(preset: RoutePreset, entry = false) {
  motion?.kill();
  scene.routeEntry = entry;
  scene.routeFrom = scene.sceneProgress;
  scene.routeFromPreset = scene.routePreset;
  scene.routePreset = preset;
  scene.routeActive = true;
  scene.routeProgress = 0;
  finishHomeIntro();
  motion = gsap.to(scene, {
    routeProgress: 1, duration: scene.reduced ? .45 : 1.05, ease: 'sine.inOut',
    onUpdate: () => {scene.routeMix = Math.sin(scene.routeProgress * Math.PI);},
    onComplete: () => {scene.routeMix = 0; scene.routeActive = false;},
  });
}

export function cancelRouteTransition() {
  motion?.kill(); scene.routeMix = 0; scene.routeActive = false;
}
