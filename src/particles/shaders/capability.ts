/** Shared low energy physical logic for Home and the Capabilities route. */
export const capabilityShader = `
uniform float uPropagationSpeed,uPropagationSpread,uPropagationDepth,uSynchronisation,uStreamCount,uParticleCount,uHomeMobile;
float streamLane(){return mod(floor(aIdentity.y*(uParticleCount-1.)+.5),uStreamCount);}
vec3 propagationPath(float t,float lane){
 bool mobile=uViewport.x<uViewport.y;
 bool homeMobile=uHomeMobile>.5;
 float width=11.547*uViewport.x/uViewport.y*(homeMobile?.30:mobile?.76:.32);
 float height=11.547*(homeMobile?.32:mobile?.20:.48);
 float f=lane/max(1.,uStreamCount-1.)-.5;
 float fan=t*t*(3.-2.*t);
 float x=(t-.5)*1.05*width;
 float y=f*(.12+fan*.74)*uPropagationSpread*height;
 float z=(.25*sin(t*PI)+f*fan*1.65*uPropagationDepth)*(homeMobile?.45:1.);
 float px=x*cos(.30)+z*sin(.30);
 return vec3(px*cos(-.10)-y*sin(-.10)+(homeMobile?(11.547*uViewport.x/uViewport.y)*.27:mobile?0.:(11.547*uViewport.x/uViewport.y)*.27),px*sin(-.10)+y*cos(-.10)+(homeMobile?-11.547*(uViewport.x/uViewport.y>.52?.20:.10):mobile?11.547*.26:0.),-x*sin(.30)+z*cos(.30));
}
vec3 capabilityMotion(vec3 p,float time,float progress){
 float deployment=smoothstep(.69,.75,progress)*(1.-smoothstep(.77,.84,progress));
 float product=smoothstep(.77,.84,progress)*(1.-smoothstep(.86,.91,progress));
 float motion=mix(.35,1.,uWakeMotion);
 // Advance along the same curved conduit, rather than translating it into a second line.
 float lane=streamLane();
 float drift=time*uPropagationSpeed*motion*(.7+lane*.04);
 float travel=fract(aIdentity.y+drift);
 p+=(propagationPath(travel,lane)-propagationPath(aIdentity.y,lane))*deployment;
 // Shared rhythm with small independent phase; modules resynchronise, never orbit.
 float phase=mix(aIdentity.z*.7,0.,uSynchronisation);
 p.y+=sin(time*.38+phase)*.045*product*motion;
 return p;
}
`;
