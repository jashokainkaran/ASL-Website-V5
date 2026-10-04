import gsap from 'gsap';
import {scene} from './scene-store';
/** Shared environment phase of the single entry controller; no independent loop. */
export function awakenEnvironment(reduced:boolean){
 scene.awakening=0;
 return gsap.to(scene,{awakening:1,duration:reduced?.45:1.7,ease:'sine.inOut'});
}
