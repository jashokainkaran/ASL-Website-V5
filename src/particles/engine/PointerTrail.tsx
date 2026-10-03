'use client';
import {useMemo,useEffect} from 'react';
import {BufferGeometry,BufferAttribute,ShaderMaterial,AdditiveBlending,type IUniform} from 'three';
export function PointerTrail({uniforms}:{uniforms:Record<string,IUniform>}) {
 const geometry=useMemo(()=>{const g=new BufferGeometry();const p=new Float32Array(1536*3);for(let i=0;i<1536;i++){p[i*3]=i/1535;p[i*3+1]=Math.sin(i*127.1);p[i*3+2]=Math.cos(i*311.7);}g.setAttribute('position',new BufferAttribute(p,3));return g;},[]);
 const material=useMemo(()=>new ShaderMaterial({transparent:true,depthWrite:false,blending:AdditiveBlending,uniforms,vertexShader:`uniform vec3 uHistory[24];uniform int uTrailLength;uniform float uTime,uDpr,uTrailWidth;varying float vAlpha;void main(){float f=position.x*float(uTrailLength-2);int i=int(f);vec3 a=uHistory[i];vec3 b=uHistory[i+1];vec2 p=mix(a.xy,b.xy,fract(f))+position.yz*uTrailWidth*.15;float age=max(0.,uTime-mix(a.z,b.z,fract(f)));vAlpha=exp(-age*3.)*(1.-position.x)*.65;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,0.,1.);gl_PointSize=3.5*uDpr;}`,fragmentShader:`uniform vec3 uBone;varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(uBone,exp(-r*r*4.)*vAlpha);}`}),[uniforms]);
 useEffect(()=>()=>{geometry.dispose();material.dispose();},[geometry,material]);return <points geometry={geometry} material={material} frustumCulled={false} dispose={null}/>;
}
