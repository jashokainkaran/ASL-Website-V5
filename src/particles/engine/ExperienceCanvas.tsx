'use client';
import {Canvas} from '@react-three/fiber';
import {useState,useEffect} from 'react';
import {ParticleField} from './ParticleField';
import {Ambient} from './Ambient';
import {tiers,detectTier,type Tier} from './tiers';
import {scene,tuning} from '@/lib/scene-store';
export default function ExperienceCanvas() {const [tier,setTier]=useState<Tier>(detectTier);const [revision,setRevision]=useState(0);
 useEffect(()=>{const update=()=>{setTier(tuning.tier==='auto'?detectTier():tuning.tier as Tier);setRevision(v=>v+1);};window.addEventListener('asl:geometry',update);scene.ambient=tiers[tier].ambient;return()=>window.removeEventListener('asl:geometry',update);},[tier]);
 return <Canvas camera={{position:[0,0,10],fov:60,near:.1,far:100}} dpr={[1,tiers[tier].dpr]} gl={{alpha:true,antialias:false,powerPreference:'high-performance'}} onCreated={({gl})=>{scene.ready=true;document.documentElement.dataset.webgl='ready';gl.domElement.addEventListener('webglcontextlost',()=>{document.documentElement.dataset.webgl='lost';scene.fallback=true;});}}><ParticleField tier={tier} revision={revision}/><Ambient count={tiers[tier].ambient}/></Canvas>;
}
