import {sample,hash,type Generator} from './shared';
import {tubePoint,type Point3} from './tube';
/** Longitudinal correspondence is unchanged; only the formation's local basis changes. */
export const helix:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height;
 const lane=hash(i,0),branch=lane<.46?0:Math.PI;
 const along=lane>.92?Math.round(u*20)/20:u;
 const angle=along*Math.PI*2*c.helixTurns+c.helixTwist;
 const radius=Math.min(c.height*.18,c.width*.14)*c.helixRadius*(1+c.helixVariation*.35*Math.sin(along*9+.6));
 const span=c.width*(mobile?.82:.68)*c.helixLength;
 const strand=(t:number):Point3=>{
  const a=t*Math.PI*2*c.helixTurns+c.helixTwist;
  const r=Math.min(c.height*.18,c.width*.14)*c.helixRadius*(1+c.helixVariation*.35*Math.sin(t*9+.6));
  return [(t-.5)*span,Math.cos(a+branch)*r,Math.sin(a+branch)*r*.94*c.helixDepth];
 };
 // Both helices have circular body; bridges cross between matching opposing turns.
 const bridge=lane>.92;
 const point=bridge?tubePoint(t=>[(along-.5)*span,Math.cos(angle)*radius*(2*t-1),Math.sin(angle)*radius*.94*c.helixDepth*(2*t-1)],hash(i,9),i,mobile?.025:.045):tubePoint(strand,u,i,mobile?.065:.12);
 const [x,y,z]=point;
 const yaw=c.helixYaw,pitch=c.helixPitch,roll=c.helixRoll;
 const px=x*Math.cos(yaw)+z*Math.sin(yaw),pz=-x*Math.sin(yaw)+z*Math.cos(yaw);
 const py=y*Math.cos(pitch)-pz*Math.sin(pitch),depth=y*Math.sin(pitch)+pz*Math.cos(pitch);
 return [px*Math.cos(roll)-py*Math.sin(roll)+(mobile?0:c.width*.025),px*Math.sin(roll)+py*Math.cos(roll)+c.helixOffset+(mobile?.85:.95),depth+c.cameraDepth];
});
