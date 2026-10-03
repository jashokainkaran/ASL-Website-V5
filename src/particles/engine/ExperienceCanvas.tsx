'use client';
import { Canvas } from '@react-three/fiber';
const positions = new Float32Array([-2,1,0, 1,-1,-2, 2,2,-1]);
export default function ExperienceCanvas() { return <Canvas camera={{position:[0,0,8], fov:60}} dpr={[1,2]}><points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry><pointsMaterial size={0.03} /></points></Canvas>; }
