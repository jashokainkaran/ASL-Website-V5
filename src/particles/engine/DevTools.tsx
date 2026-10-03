'use client';
import {useEffect,useRef} from 'react';
import {Leva,useControls,folder} from 'leva';
import Stats from 'stats-gl';
import {tiers,type Tier} from './tiers';
import {scene,tuning,type Tuning} from '@/lib/scene-store';
export default function DevTools(){const output=useRef<HTMLPreElement>(null);
 const number=(key:keyof Tuning,min:number,max:number,step:number,geometry=false)=>({value:tuning[key] as number,min,max,step,onChange:(value:number)=>{Object.assign(tuning,{[key]:value});if(geometry)window.dispatchEvent(new Event('asl:geometry'));}});
 useControls({
 'Scene':folder({manual:{value:false,onChange:(v:boolean)=>{scene.manual=v;}},sceneProgress:{value:0,min:0,max:1,step:.001,onChange:(v:number)=>{if(scene.manual)scene.sceneProgress=v;}},tier:{value:'auto',options:['auto','high','medium','low'],onChange:(v:string)=>{tuning.tier=v;if(v!=='auto')tuning.count=tiers[v as Tier].count;window.dispatchEvent(new Event('asl:geometry'));}},count:number('count',18000,100000,1000,true)}),
 'Particle character':folder({pointSize:number('pointSize',.5,4,.1),sizeDistribution:number('sizeDistribution',.2,2,.1),largeShare:number('largeShare',0,.02,.001),focalDistance:number('focalDistance',4,16,.1),blur:number('blur',0,2,.05),stretch:number('stretch',0,2,.1),twinkle:number('twinkle',0,.5,.01),idleNoise:number('idleNoise',0,.5,.01),curvature:number('curvature',0,2,.05)},{collapsed:true}),
 'Formations':folder({cloudDensity:number('cloudDensity',.2,1.5,.05,true),cloudSpread:number('cloudSpread',.5,1.5,.05,true),helixRadius:number('helixRadius',.5,1.5,.05,true),helixHeight:number('helixHeight',.6,1.4,.05,true),helixTurns:number('helixTurns',1,3,.1,true),filamentCount:number('filamentCount',5,9,1,true),filamentSpread:number('filamentSpread',.5,2,.05,true),logoScale:number('logoScale',.6,1.5,.05,true)},{collapsed:true}),
 'Interaction':folder({pointerRadius:number('pointerRadius',.3,3,.1),pointerStrength:number('pointerStrength',0,1,.05),pointerFalloff:number('pointerFalloff',1,5,.1),swirl:number('swirl',0,1,.05),recovery:number('recovery',1,8,.1),trailLength:number('trailLength',4,24,1),trailWidth:number('trailWidth',.03,.5,.01)},{collapsed:true}),
 });
 useEffect(()=>{const stats=new Stats({trackGPU:false,trackCPT:false});stats.dom.style.cssText='position:fixed;bottom:0;left:0;top:auto;z-index:60';document.body.appendChild(stats.dom);let frame=0;const tick=()=>{stats.update();frame=requestAnimationFrame(tick);};tick();const id=setInterval(()=>{if(output.current)output.current.textContent=`${scene.state} | ${scene.fps} fps\n${scene.count} main + ${scene.ambient} ambient | DPR ${scene.dpr}\nProjected target bounds (unclipped W × H):\n`+Object.entries(scene.bounds).map(([k,v])=>`${k}: ${v.width}% × ${v.height}%`).join('\n');},500);
 const api={scene,tuning,rebuild:()=>window.dispatchEvent(new Event('asl:geometry'))};Object.assign(window,{__ASL:api});return()=>{clearInterval(id);cancelAnimationFrame(frame);stats.dom.remove();Reflect.deleteProperty(window,'__ASL');};},[]);
 return <div className="dev-tools"><Leva collapsed/><details className="dev-readout"><summary>Scene measurements</summary><pre ref={output}/></details></div>;
}
