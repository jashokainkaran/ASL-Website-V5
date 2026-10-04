import {sample,cross,hash,type Generator} from './shared';
/** Longitudinal correspondence is unchanged; only the formation's local basis changes. */
export const helix:Generator=(count,c)=>sample(count,(u,i)=>{
 const mobile=c.width<c.height;
 const angle=u*Math.PI*2*c.helixTurns+c.helixTwist;
 const lane=hash(i,7),branch=lane<.46?0:Math.PI;
 const radius=Math.min(c.height*.18,c.width*.14)*c.helixRadius;
 const off=cross(i,mobile?.07:.14);
 const bridge=lane>.92?hash(i,9)*2-1:1;
 const x=(u-.5)*c.width*.86*c.helixLength;
 const y=Math.cos(angle+branch)*radius*bridge+off[0];
 const z=Math.sin(angle+branch)*radius*.72*c.helixDepth*bridge+off[1];
 const yaw=c.helixYaw;
 return [x*Math.cos(yaw)+z*Math.sin(yaw),y+c.helixOffset,-x*Math.sin(yaw)+z*Math.cos(yaw)];
});
