'use client';
import {useMemo,useEffect,useRef} from 'react';
import {useFrame,useThree} from '@react-three/fiber';
import {BufferGeometry,BufferAttribute,ShaderMaterial,AdditiveBlending,Color,Points} from 'three';
import {hash} from '../formations/shared';
import {scene,tuning} from '@/lib/scene-store';
export function Ambient({count,revision}:{count:number;revision:number}) {
 const points=useRef<Points>(null),{size,gl}=useThree();
 const geometry=useMemo(()=>{
  void revision;
  const g=new BufferGeometry(),a=new Float32Array(count*3);
  for(let i=0;i<count;i++)a.set([(hash(i,21)-.5)*11.547*size.width/size.height*2,(hash(i,22)-.5)*23,-3-hash(i,23)*12*tuning.ambientDepth],i*3);
  g.setAttribute('position',new BufferAttribute(a,3));return g;
 },[count,revision,size.width,size.height]);
 const material=useMemo(()=>new ShaderMaterial({transparent:true,depthWrite:false,blending:AdditiveBlending,uniforms:{uAlpha:{value:0},uDpr:{value:1},uColor:{value:new Color(getComputedStyle(document.documentElement).getPropertyValue('--color-bone').trim())}},vertexShader:'uniform float uDpr; void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uDpr*clamp(12./-mv.z,.65,1.);}',fragmentShader:'uniform vec3 uColor;uniform float uAlpha;void main(){float a=1.-smoothstep(0.,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(uColor,a*uAlpha);}'}),[]);
 useEffect(()=>()=>geometry.dispose(),[geometry]);
 useEffect(()=>()=>material.dispose(),[material]);
 useFrame((_,delta)=>{
  material.uniforms.uAlpha.value=tuning.ambientBrightness*Math.min(1,Math.max(0,(scene.awakening-.08)/.3));
  material.uniforms.uDpr.value=gl.getPixelRatio();
  if(points.current)points.current.rotation.y+=Math.min(delta,.1)*.001*tuning.ambientMovement*(scene.reduced?.3:1);
 });
 return <points ref={points} geometry={geometry} material={material} dispose={null}/>;
}
