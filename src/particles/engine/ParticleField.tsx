'use client';
import {useMemo,useEffect,useRef} from 'react';
import {useFrame,useThree} from '@react-three/fiber';
import {AdditiveBlending,Color,ShaderMaterial,Vector2,Vector4,BufferAttribute} from 'three';
import {scene,tuning} from '@/lib/scene-store';
import {makeGeometry,projectedBounds} from './geometry';
import {vertexShader,fragmentShader} from '../shaders/particle';
import {tiers,type Tier} from './tiers';
import {PointerInput} from '../interaction/PointerInput';
import {resolvePointerProfile} from '../interaction/profiles';
import {sectionFormations,sectionWindows} from '../section-formations';
import {routePresets,type RoutePreset} from '@/lib/route-transition';
import {stateName} from '../states';
import {contact} from '../formations/contact';
export function ParticleField({tier,revision}:{tier:Tier;revision:number}) {
 const {size,gl,camera}=useThree();const quality=tiers[tier];
 const data=useMemo(()=>{void revision;return makeGeometry(tuning.tier==='auto'?quality.count:tuning.count,{...tuning,width:11.547*size.width/size.height,height:11.547});},[quality.count,size.width,size.height,revision]);
 const material=useMemo(()=>{const css=getComputedStyle(document.documentElement);const color=(key:string)=>new Color(css.getPropertyValue(key).trim());return new ShaderMaterial({vertexShader,fragmentShader,transparent:true,depthWrite:false,blending:AdditiveBlending,uniforms:{uHomeIntro:{value:0},uRouteProgress:{value:1},uRouteEntry:{value:0},uContactFocus:{value:new Vector4()},uContactReceipt:{value:0},uRouteFrom:{value:0},uRouteFromPreset:{value:0},uRoutePreset:{value:0},uSectionStart:{value:.52},uSectionEnd:{value:.59},uSectionStrength:{value:1},uTime:{value:0},uAwakening:{value:1},uWakeMotion:{value:1},uRouteMix:{value:0},uProgress:{value:0},uRate:{value:0},uDpr:{value:1},uSize:{value:tuning.pointSize},uDistribution:{value:tuning.sizeDistribution},uLargeShare:{value:tuning.largeShare},uFocus:{value:10},uBlur:{value:.65},uStretch:{value:1},uTwinkle:{value:.18},uIdle:{value:.11},uCurve:{value:1},uPointerEnabled:{value:1},uPointerTime:{value:0},uPointerRadius:{value:90},uPointerStrength:{value:.85},uPointerFalloff:{value:1.15},uPointerDepth:{value:.6},uPointerRecovery:{value:10},uPointerVelocity:{value:.25},uPointerProfile:{value:new Vector4()},uPointerSamples:{value:[]},uPointerVelocities:{value:[]},uCoreSize:{value:tuning.coreSize},uFalloffSize:{value:.72},uBrightness:{value:tuning.particleBrightness},uOpacity:{value:tuning.particleOpacity},uDensityResponse:{value:tuning.densityResponse},uOctaves:{value:quality.octaves},uViewport:{value:new Vector2()},uBone:{value:color('--color-bone')},uCream:{value:color('--color-bone').lerp(color('--color-gold'),.22)},uGold:{value:color('--color-gold')}}});},[quality]);
 const sectionKey=useRef('');const routeKey=useRef('');
 const pointer=useMemo(()=>new PointerInput(),[]);
 const profile=useRef({radius:1,strength:1,depth:1,recovery:1});
 const timing=useRef({time:0,frames:0,elapsed:0,previous:0});
 useEffect(()=>{sectionKey.current='';routeKey.current='';scene.bounds=projectedBounds(data.targets,size.width/size.height);scene.count=data.geometry.getAttribute('position').count;return()=>data.geometry.dispose();},[data,size]);
 useEffect(()=>()=>material.dispose(),[material]);
 useEffect(()=>{
  const move=(e:PointerEvent)=>{
   if(document.documentElement.dataset.entry!=='ready'||!tuning.pointerEnabled)return;
   if(e.pointerType==='touch'&&e.type==='pointermove'&&e.buttons===0)return;
   pointer.move(e.clientX-size.width/2,size.height/2-e.clientY,performance.now()/1000,e.pointerType==='touch');
  };
  const release=(e:PointerEvent)=>{if(e.pointerType==='touch'||e.type==='pointercancel')pointer.release(performance.now()/1000);};
  const leave=(e:PointerEvent)=>{if(e.relatedTarget===null)pointer.release(performance.now()/1000);};
  const blur=()=>pointer.release(performance.now()/1000);
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerdown',move,{passive:true});
  window.addEventListener('pointerup',release,{passive:true});window.addEventListener('pointercancel',release,{passive:true});
  window.addEventListener('pointerout',leave,{passive:true});window.addEventListener('blur',blur);
  return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',move);window.removeEventListener('pointerup',release);window.removeEventListener('pointercancel',release);window.removeEventListener('pointerout',leave);window.removeEventListener('blur',blur);pointer.clear();};
 },[pointer,size]);
 useFrame((_,delta)=>{scene.rendered=true;
 if((scene.routePreset==='capabilities'||scene.routePreset==='contact')&&routeKey.current!==scene.routePreset){
  const attribute=data.geometry.getAttribute('aRouteTarget') as BufferAttribute;
  const generator=scene.routePreset==='contact'?contact:sectionFormations[sectionWindows[0].name];
  attribute.set(generator(data.geometry.getAttribute('position').count,{...tuning,width:11.547*size.width/size.height,height:11.547}));attribute.needsUpdate=true;routeKey.current=scene.routePreset;
 }
 const sectionProgress=scene.routeActive&&scene.routeFrom>=.52&&scene.routeFrom<.91?scene.routeFrom:scene.sceneProgress;
 const index=sectionProgress<.61?0:sectionProgress<.69?1:sectionProgress<.77?2:3;
 const key=`${index}:${scene.sectionPreview}`;
 if(((sectionProgress>=.52&&sectionProgress<.91)||scene.sectionPreview)&&key!==sectionKey.current){
  const context={...tuning,width:11.547*size.width/size.height,height:11.547};
  const count=data.geometry.getAttribute('position').count;
  const from=index===0?data.targets.logo:sectionFormations[sectionWindows[index-1].name](count,context);
  const target=sectionFormations[scene.sectionPreview||sectionWindows[index].name](count,context);
  for(const [name,array] of [['aSectionFrom',from],['aSectionTarget',target]] as const){const attribute=data.geometry.getAttribute(name) as BufferAttribute;attribute.set(array);attribute.needsUpdate=true;}
  material.uniforms.uSectionStart.value=sectionWindows[index].start;
  material.uniforms.uSectionEnd.value=sectionWindows[index].end;
  sectionKey.current=key;
 }
const t=timing.current;t.time+=Math.min(delta,.1)*(scene.reduced?.65:1);const u=material.uniforms;u.uTime.value=t.time;u.uHomeIntro.value=scene.homeIntro;u.uRouteProgress.value=scene.routeProgress;u.uRouteEntry.value=scene.routeEntry?1:0;u.uContactFocus.value.set(scene.contactFocus.x,scene.contactFocus.y,scene.contactFocus.strength,0);u.uContactReceipt.value=scene.contactReceipt;u.uRouteFrom.value=scene.routeFrom;u.uRouteFromPreset.value=routePresets[scene.routeFromPreset as RoutePreset].code;u.uRoutePreset.value=routePresets[scene.routePreset as RoutePreset].code;u.uSectionStrength.value=tuning.sectionStrength;u.uAwakening.value=scene.awakening;u.uWakeMotion.value=scene.reduced?0:1;u.uRouteMix.value=scene.routeMix;u.uViewport.value.set(size.width,size.height);u.uProgress.value=scene.sceneProgress;u.uRate.value+=(Math.max(-.6,Math.min(.6,(scene.sceneProgress-t.previous)/Math.max(delta,.001)))-u.uRate.value)*.2;t.previous=scene.sceneProgress;
 const mapping={uSize:'pointSize',uDistribution:'sizeDistribution',uLargeShare:'largeShare',uFocus:'focalDistance',uBlur:'blur',uStretch:'stretch',uTwinkle:'twinkle',uIdle:'idleNoise',uCurve:'curvature',uCoreSize:'coreSize',uFalloffSize:'falloffSize',uBrightness:'particleBrightness',uOpacity:'particleOpacity',uDensityResponse:'densityResponse',uPointerRadius:'pointerRadius',uPointerStrength:'pointerStrength',uPointerFalloff:'pointerFalloff',uPointerDepth:'pointerDepth',uPointerRecovery:'recovery',uPointerVelocity:'velocityInfluence'} as const;
 for(const [uniform,key] of Object.entries(mapping))u[uniform].value=tuning[key];
 u.uDpr.value=gl.getPixelRatio();
 if(scene.reduced){u.uPointerStrength.value*=.45;u.uPointerDepth.value*=.35;u.uStretch.value*=.4;u.uCurve.value*=.55;u.uIdle.value*=.6;}
 const enabled=tuning.pointerEnabled&&document.documentElement.dataset.entry==='ready'&&!scene.routeActive;
 if(!enabled)pointer.clear();
 const pointerTime=performance.now()/1000;
 pointer.update(pointerTime,tuning.velocityInfluence);
 resolvePointerProfile(scene.sceneProgress,profile.current);
 const pr=profile.current;
 if(scene.routePreset==='contact'){pr.strength*=.16;pr.depth*=.2;}
 u.uPointerProfile.value.set(pr.radius,pr.strength,pr.depth,pr.recovery);
 u.uPointerEnabled.value=enabled?1:0;u.uPointerTime.value=pointerTime;
 u.uPointerSamples.value=pointer.samples;u.uPointerVelocities.value=pointer.velocities;
 camera.position.z=10-scene.routeMix*(scene.reduced?.1:.8);
 camera.position.x=Math.sin(scene.sceneProgress*Math.PI)*(scene.reduced?.035:.12);camera.position.y=Math.sin(scene.sceneProgress*Math.PI*2.)*(scene.reduced?.025:.08);camera.lookAt(0,0,0);
 t.frames++;t.elapsed+=delta;if(t.elapsed>1){scene.fps=Math.round(t.frames/t.elapsed);scene.state=stateName(scene.sceneProgress);scene.dpr=gl.getPixelRatio();t.frames=0;t.elapsed=0;}
 });
 return <points geometry={data.geometry} material={material} frustumCulled={false} dispose={null}/>;
}
