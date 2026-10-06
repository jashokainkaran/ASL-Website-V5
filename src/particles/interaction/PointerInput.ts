import {Vector3,Vector4} from 'three';

export const POINTER_SAMPLES=8;
/** A bounded input history, never particle state. Coordinates are CSS pixels
 * relative to the viewport centre, with Y pointing up like camera view space. */
export class PointerInput {
 readonly samples=Array.from({length:POINTER_SAMPLES},()=>new Vector4(0,0,-100,0));
 readonly velocities=Array.from({length:POINTER_SAMPLES},()=>new Vector3(0,0,1));
 active=false;
 private x=0;
 private y=0;
 private vx=0;
 private vy=0;
 private eventTime=0;
 private touch=false;
 private index=0;
 private sampleTime=-1;
 private activationTime=0;

 move(x:number,y:number,time:number,touch:boolean){
  if(!this.active)this.activationTime=time;
  const dt=Math.max(.008,Math.min(.1,time-this.eventTime));
  const vx=this.active?(x-this.x)/dt:0,vy=this.active?(y-this.y)/dt:0;
  const speed=Math.hypot(vx,vy),clamp=Math.min(1,1800/Math.max(1,speed));
  this.vx=vx*clamp;this.vy=vy*clamp;
  this.x=x;this.y=y;this.eventTime=time;this.touch=touch;this.active=true;
 }
 release(time:number){
  // A quick native tap can finish between render frames. Retain a small touch
  // impulse so it still produces a visible response followed by healing.
  if(this.active&&this.touch){
   const gain=Math.max(this.samples[this.index].w,.5*.65);
   this.samples[this.index].set(this.x,this.y,time,gain);
   this.velocities[this.index].set(0,0,1.2);
  }
  this.active=false;
 }
 clear(){this.active=false;for(const sample of this.samples)sample.w=0;}
 update(time:number,velocityInfluence:number){
  if(!this.active)return;
  const current=this.samples[this.index];
  const moved=Math.hypot(current.x-this.x,current.y-this.y)>2;
  if(moved&&time-this.sampleTime>=.04){this.index=(this.index+1)%POINTER_SAMPLES;this.sampleTime=time;}
  const speed=Math.min(1,Math.hypot(this.vx,this.vy)/1800)*Math.exp(-Math.max(0,time-this.eventTime)*10);
  const attack=Math.max(0,time-this.activationTime)*35;
  const onset=1-(1+attack)*Math.exp(-attack);
  this.samples[this.index].set(this.x,this.y,time,onset*(this.touch?.65:1)*(1+speed*velocityInfluence));
  this.velocities[this.index].set(this.vx/1800*speed,this.vy/1800*speed,this.touch?1.2:1);
 }
}
