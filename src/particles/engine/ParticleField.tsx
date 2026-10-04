'use client';
import {useMemo,useEffect,useRef} from 'react';
import {useFrame,useThree} from '@react-three/fiber';
import {AdditiveBlending,Color,ShaderMaterial,Vector2,Vector3,Plane,Raycaster} from 'three';
import {scene,tuning} from '@/lib/scene-store';
import {makeGeometry,projectedBounds} from './geometry';
import {vertexShader,fragmentShader} from '../shaders/particle';
import {tiers,type Tier} from './tiers';
import {PointerTrail} from './PointerTrail';
import {stateName} from '../states';
export function ParticleField({tier,revision}:{tier:Tier;revision:number}) {
 const {size,gl,camera}=useThree();const quality=tiers[tier];
 const data=useMemo(()=>{void revision;return makeGeometry(tuning.tier==='auto'?quality.count:tuning.count,{...tuning,width:11.547*size.width/size.height,height:11.547});},[quality.count,size.width,size.height,revision]);
 const material=useMemo(()=>{const css=getComputedStyle(document.documentElement);const color=(key:string)=>new Color(css.getPropertyValue(key).trim());return new ShaderMaterial({vertexShader,fragmentShader,transparent:true,depthWrite:false,blending:AdditiveBlending,uniforms:{uTime:{value:0},uProgress:{value:0},uRate:{value:0},uDpr:{value:1},uSize:{value:1.6},uDistribution:{value:1},uLargeShare:{value:.012},uFocus:{value:10},uBlur:{value:.65},uStretch:{value:1},uTwinkle:{value:.18},uIdle:{value:.11},uCurve:{value:1},uRadius:{value:1.4},uStrength:{value:.3},uFalloff:{value:2},uSwirl:{value:.3},uRecovery:{value:3},uTrailWidth:{value:.12},uOctaves:{value:quality.octaves},uTrailLength:{value:quality.history},uHistory:{value:Array.from({length:24},()=>new Vector3(100,100,-100))},uViewport:{value:new Vector2()},uBone:{value:color('--color-bone')},uCream:{value:color('--color-bone').lerp(color('--color-gold'),.22)},uGold:{value:color('--color-gold')}}});},[quality]);
 const pointer=useRef({x:100,y:100,active:false});const timing=useRef({time:0,frames:0,elapsed:0,previous:0,history:0});
 useEffect(()=>{scene.bounds=projectedBounds(data.targets,size.width/size.height);scene.count=data.geometry.getAttribute('position').count;return()=>data.geometry.dispose();},[data,size]);
 useEffect(()=>()=>material.dispose(),[material]);
 useEffect(()=>{const ray=new Raycaster(),plane=new Plane(new Vector3(0,0,1),0),hit=new Vector3();const move=(e:PointerEvent)=>{ray.setFromCamera(new Vector2(e.clientX/size.width*2-1,1-e.clientY/size.height*2),camera);if(ray.ray.intersectPlane(plane,hit)){pointer.current={x:hit.x,y:hit.y,active:true};}};const leave=()=>{pointer.current.active=false;};window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerdown',move,{passive:true});window.addEventListener('pointerout',leave);return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',move);window.removeEventListener('pointerout',leave);};},[camera,size]);
 useFrame((_,delta)=>{const t=timing.current;t.time+=Math.min(delta,.1)*(scene.reduced?.65:1);const u=material.uniforms;u.uTime.value=t.time;u.uViewport.value.set(size.width,size.height);u.uProgress.value=scene.sceneProgress;u.uRate.value+=(Math.max(-.6,Math.min(.6,(scene.sceneProgress-t.previous)/Math.max(delta,.001)))-u.uRate.value)*.2;t.previous=scene.sceneProgress;
 const mapping={uSize:'pointSize',uDistribution:'sizeDistribution',uLargeShare:'largeShare',uFocus:'focalDistance',uBlur:'blur',uStretch:'stretch',uTwinkle:'twinkle',uIdle:'idleNoise',uCurve:'curvature',uRadius:'pointerRadius',uStrength:'pointerStrength',uFalloff:'pointerFalloff',uSwirl:'swirl',uRecovery:'recovery',uTrailWidth:'trailWidth'} as const;
 for(const [uniform,key] of Object.entries(mapping))u[uniform].value=tuning[key];u.uTrailLength.value=Math.min(tuning.trailLength,quality.history);u.uDpr.value=gl.getPixelRatio();if(scene.reduced){u.uStrength.value*=.4;u.uStretch.value*=.4;u.uCurve.value*=.55;u.uIdle.value*=.6;}
 t.history+=delta;if(t.history>.025&&pointer.current.active){const history=u.uHistory.value as Vector3[];for(let i=23;i>0;i--)history[i].copy(history[i-1]);history[0].set(pointer.current.x,pointer.current.y,u.uTime.value);t.history=0;}
 camera.position.x=Math.sin(scene.sceneProgress*Math.PI)*(scene.reduced?.035:.12);camera.position.y=Math.sin(scene.sceneProgress*Math.PI*2.)*(scene.reduced?.025:.08);camera.lookAt(0,0,0);
 t.frames++;t.elapsed+=delta;if(t.elapsed>1){scene.fps=Math.round(t.frames/t.elapsed);scene.state=stateName(scene.sceneProgress);scene.dpr=gl.getPixelRatio();t.frames=0;t.elapsed=0;}
 });
 return <><points geometry={data.geometry} material={material} frustumCulled={false} dispose={null}/><PointerTrail uniforms={material.uniforms}/></>;
}
