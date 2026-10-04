import {sample,cross,hash,type Generator} from './shared';
/** Longitudinal correspondence is unchanged; only the formation's local basis changes. */
export const helix:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height;
 const angle=u*Math.PI*2*c.helixTurns+c.helixTwist;
 const lane=hash(i,7),branch=lane<.46?0:Math.PI;
 const radius=Math.min(c.height*.18,c.width*.14)*c.helixRadius*(1+c.helixVariation*Math.sin(u*9+.6));
 const off=cross(i,mobile?.07:.14);
 const bridge=lane>.92?hash(i,9)*2-1:1;
 const x=(u-.5)*c.width*(mobile?.82:.76)*c.helixLength;
 const y=Math.cos(angle+branch)*radius*bridge+off[0];
 const z=Math.sin(angle+branch)*radius*.72*c.helixDepth*bridge+off[1];
 const yaw=c.helixYaw,pitch=c.helixPitch,roll=c.helixRoll;
 const px=x*Math.cos(yaw)+z*Math.sin(yaw),pz=-x*Math.sin(yaw)+z*Math.cos(yaw);
 const py=y*Math.cos(pitch)-pz*Math.sin(pitch),depth=y*Math.sin(pitch)+pz*Math.cos(pitch);
 return [px*Math.cos(roll)-py*Math.sin(roll),px*Math.sin(roll)+py*Math.cos(roll)+c.helixOffset,depth+c.cameraDepth];
});
