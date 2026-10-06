/** Compare the undeformed projected position with input, so particles at
 * different depths respond to the same visible touch. Displacement is applied
 * in camera view space and cannot corrupt any formation attribute. */
export const pointerShader = `
uniform vec4 uPointerSamples[8];
uniform vec3 uPointerVelocities[8];
uniform vec4 uPointerProfile;
uniform float uPointerTime,uPointerEnabled,uPointerRadius,uPointerStrength,uPointerFalloff,uPointerDepth,uPointerRecovery,uPointerVelocity;
vec3 pointerDisplacement(vec4 viewPosition){
 if(uPointerEnabled<.5)return vec3(0.);
 vec4 projected=projectionMatrix*viewPosition;
 vec2 screen=projected.xy/projected.w*uViewport*.5;
 vec2 direction=vec2(0.);float total=0.,peak=0.;
 for(int i=0;i<8;i++){
  vec4 impulse=uPointerSamples[i];
  float age=max(0.,uPointerTime-impulse.z);
  float recovery=age*uPointerRecovery*uPointerProfile.w;
  if(impulse.w<=0.||recovery>10.)continue;
  // Critically damped release: no overshoot; 95% healed in about .4–.6s.
  float healing=(1.+recovery)*exp(-recovery);
  vec2 delta=screen-impulse.xy;
  float radius=uPointerRadius*uPointerProfile.x*uPointerVelocities[i].z;
  float distance=length(delta);
  float influence=pow(1.-smoothstep(0.,radius,distance),uPointerFalloff)*healing*impulse.w;
  vec2 radial=distance>.1?delta/distance:vec2(cos(aIdentity.w),sin(aIdentity.w));
  radial*=smoothstep(0.,radius*.12,distance);
  direction+=(radial+uPointerVelocities[i].xy*uPointerVelocity*.18)*influence;
  total+=influence;peak=max(peak,influence);
 }
 // Normalised history prevents force accumulation under a stationary cursor.
 float massResponse=mix(1.08,.72,clamp((aCharacter.y-.4)/1.6,0.,1.));
 vec2 pixels=direction/max(total,.0001)*min(peak,1.35)*60.*uPointerStrength*uPointerProfile.y*massResponse;
 float viewUnitsPerPixel=2.*max(.1,-viewPosition.z)/(uViewport.y*projectionMatrix[1][1]);
 return vec3(pixels*viewUnitsPerPixel,-min(peak,1.)*uPointerDepth*uPointerProfile.z);
}
`;
