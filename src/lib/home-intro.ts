import gsap from 'gsap';
import {scene} from './scene-store';

let intro: gsap.core.Tween | undefined;
let resolving = false;
/** Creative content begins only after the document entry gate has left. */
export function startHomeIntro() {
  intro?.kill();
  resolving = false;
  scene.homeIntro = 0;
  intro = gsap.to(scene, {homeIntro: 1, duration: scene.reduced ? .9 : 1.4, ease: 'sine.inOut'});
}

export function resolveHomeIntro() {
  if (scene.homeIntro >= 1 || resolving) return;
  resolving = true;
  intro?.kill();
  intro = gsap.to(scene, {homeIntro: 1, duration: .22, ease: 'power2.out'});
}

export function finishHomeIntro() {
  intro?.kill();
  resolving = true;
  scene.homeIntro = 1;
}
