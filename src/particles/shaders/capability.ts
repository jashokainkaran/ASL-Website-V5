/** Low energy physical logic, evaluated only on the Capabilities route. */
export const capabilityShader = `
uniform float uPropagationSpeed,uPropagationSpread,uPropagationDepth,uSynchronisation;
vec3 capabilityMotion(vec3 p,float time,float progress){
 float deployment=smoothstep(.69,.75,progress)*(1.-smoothstep(.77,.84,progress));
 float product=smoothstep(.77,.84,progress)*(1.-smoothstep(.86,.91,progress));
 float motion=uWakeMotion;
 // A travelling impulse opens each path in depth. Delayed lanes carry the pulse.
 float drift=time*uPropagationSpeed*(.7+aIdentity.z*.07);
 float longitudinal=fract(aIdentity.y*3.+drift)-fract(aIdentity.y*3.);
 bool mobile=uViewport.x<uViewport.y;
 float width=11.547*uViewport.x/uViewport.y*(mobile?.80:.34);
 float lane=aIdentity.z/6.-.5;
 p.x+=longitudinal*width*1.03*deployment*motion;
 p.y+=longitudinal*lane*.55*11.547*(mobile?.24:.54)*uPropagationSpread*deployment*motion;
 p.z+=longitudinal*lane*2.*uPropagationDepth*deployment*motion;
 float wave=pow(max(0.,sin(aIdentity.y*PI*6.-time*uPropagationSpeed*5.-aIdentity.z*.45)),8.);
 p.x+=wave*.30*deployment*motion;
 p.z-=wave*.42*deployment*motion;
 // Shared rhythm with small independent phase; modules resynchronise, never orbit.
 float phase=mix(aIdentity.z*.7,0.,uSynchronisation);
 p.y+=sin(time*.38+phase)*.045*product*motion;
 return p;
}
`;
