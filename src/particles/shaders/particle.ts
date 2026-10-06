import {formations} from '../states';
import {pointerShader} from './pointer';
import {archiveShader} from './archive';
export const vertexShader = `
${[...new Set(formations.map(f=>f.attribute))].filter(attribute=>attribute!=='position').map(attribute=>`attribute vec3 ${attribute};`).join('\n')}
attribute vec4 aIdentity; attribute vec4 aCharacter;
#define aOffset (vec3(fract(aIdentity.x*17.3),fract(aCharacter.z*13.7),fract(aIdentity.w*5.1))-.5)
attribute vec3 aSectionFrom,aSectionTarget,aRouteTarget;
uniform float uRouteMix,uRouteProgress,uRouteFrom,uRouteFromPreset,uRoutePreset,uHomeIntro,uSectionStart,uSectionEnd,uSectionStrength,uAwakening,uWakeMotion;
uniform float uBrightness,uRouteEntry,uContactReceipt;
uniform vec4 uContactFocus;
uniform float uTime,uProgress,uRate,uDpr,uSize,uDistribution,uLargeShare,uFocus,uBlur,uStretch,uTwinkle,uIdle,uCurve,uOctaves;
uniform vec2 uViewport;
varying float vBrightness,vBlur,vStretch,vWarm,vGold;
varying vec2 vDirection;
${pointerShader}
const float PI=3.14159265;
${archiveShader}
// Analytic divergence-free curl field; octave count is quality-tier controlled.
vec3 curl(vec3 p,float t){vec3 result=vec3(0.);float amp=1.;for(int j=0;j<3;j++){if(float(j)>=uOctaves)break;result+=amp*vec3(sin(p.y+t)-cos(p.z-t),sin(p.z+t)-cos(p.x-t),sin(p.x+t)-cos(p.y-t));p*=1.9;amp*=.5;}return result;}
vec3 transit(vec3 from,vec3 target,float p,float start,float end,float time){
 if(p<=start)return from;if(p>=end)return target;
 float threshold=.55*aIdentity.y+.3*aIdentity.x+.15*fract(aIdentity.z/7.);
 if(start<.1)threshold=clamp(length(target)/6.,0.,1.)*.65+aIdentity.x*.35;
 if(start>.1&&start<.2)threshold=clamp(abs(target.y)/6.,0.,1.)*.45+aIdentity.x*.25+step(.45,aIdentity.x)*.2;
 float local=smoothstep(0.,.72,clamp((p-start)/(end-start)-threshold*.28,0.,1.));
 vec3 axis=vec3(cos(aIdentity.w+local*PI*2.),sin(aIdentity.w+local*PI*2.),sin(local*PI+aIdentity.w));
 vec3 flow=curl(mix(from,target,local)*.36,time*.07)+axis*.20;
 return mix(from,target,local)+flow*sin(PI*local)*uCurve*.65;
}
vec3 finalTarget(vec3 logo){
 bool mobile=uViewport.x<uViewport.y;
 float width=11.547*uViewport.x/uViewport.y;
 return vec3(logo.x*(mobile?.65:1.15)+width*(mobile?.20:.30),logo.y*(mobile?.65:1.15)+(mobile?1.35:-.5),logo.z);
}
vec3 positionAt(float time,float progress){
 vec3 p=position;
 ${formations.filter(f=>['cloud','helix','logo'].includes(f.name)).map(f=>`p=transit(p,${f.attribute},progress,${f.window[0].toFixed(4)},${f.window[1].toFixed(4)},time);`).join('\n')}
 if(progress>=.52){
  p=transit(aSectionFrom,aSectionTarget,progress,uSectionStart,uSectionEnd,time);
  p=mix(aLogoTarget,p,uSectionStrength);
 }
 p=transit(p,aEdgeTarget,progress,.86,.91,time);
 p=transit(p,finalTarget(aLogoTarget),progress,.92,.99,time);
 float dnaHold=smoothstep(.3744,.385,progress)*(1.-smoothstep(.4212,.44,progress));
 float rest=(1.-smoothstep(.48,.505,progress)*.96)*(1.-dnaHold*.78);
 float streamLife=smoothstep(.69,.75,progress)*(1.-smoothstep(.77,.84,progress));
 p.x+=sin(time*.65+aIdentity.y*18.)*.12*streamLife;
 float clusterLife=smoothstep(.77,.84,progress)*(1.-smoothstep(.86,.91,progress));
 p+=aOffset*sin(time*.5+aIdentity.y*PI*6.)*.18*clusterLife;
 p+=curl(p*.35,time*.12+aIdentity.w*.04)*uIdle*rest;
 p+=aOffset*sin(time*.2+aIdentity.w)*uIdle*rest;
 // Spatial emergence: depth birth, delayed groups and short currents organise into paths.
 if(progress<.104 && uHomeIntro<1.){
  float born=smoothstep((aIdentity.x*.28+abs(aIdentity.y-.5)*.84),(aIdentity.x*.28+abs(aIdentity.y-.5)*.84)+.26,uHomeIntro);
  float organise=smoothstep(.35,1.,uHomeIntro);
  vec3 distant=aRoamTarget+aOffset*3.;distant.z-=10.*(1.-born);
  p=mix(distant,p,organise);
  p.y+=sin(aIdentity.y*12.+time*.35)*.18*(1.-organise);
 }
 float wake=sin(clamp(uAwakening,0.,1.)*PI);
 p.y+=sin(p.x*.45-uAwakening*7.)*wake*.16*uWakeMotion;
 return p;
}
vec3 contactPosition(float time){
 vec3 p=aRouteTarget;
 float drift=sin(time*.08+aIdentity.y*PI*2.)*uWakeMotion;
 p.y+=drift*.055;p.z+=drift*.025;
 vec2 focus=vec2(uContactFocus.x*11.547*uViewport.x/uViewport.y,uContactFocus.y*11.547);
 p.xy+=normalize(focus-p.xy+vec2(.001))*.035*uContactFocus.z*uWakeMotion;
 p.xy*=1.-uContactReceipt*.025;
 return p;
}
void main(){
 vec3 p=positionAt(uTime,uProgress);
 vec3 next=positionAt(uTime+.016,uProgress+uRate*.016);
 // Route-local targets use the existing lazy route buffer; the Home story is untouched.
 if(uRoutePreset>4.5){
  p=contactPosition(uTime);next=contactPosition(uTime+.016);
 }
 if(uRoutePreset>.5&&uRoutePreset<1.5){
  p=archivePosition(uTime,uProgress);
  next=archivePosition(uTime+.016,uProgress+uRate*.016);
 }
 if(uRouteProgress<1.){
  vec3 source=positionAt(uTime,uRouteFrom);
  if(uRouteFromPreset>4.5)source=contactPosition(uTime);
  if(uRouteEntry>.5)source=aLogoTarget*.16;
  if(uRouteEntry<.5&&uRouteFromPreset>.5&&uRouteFromPreset<1.5)source=archivePosition(uTime,uRouteFrom);
  vec3 target=uRoutePreset<.5?p:uRoutePreset<1.5?p:uRoutePreset<2.5?aEdgeTarget:uRoutePreset<3.5?aRouteTarget:uRoutePreset<4.5?aEdgeTarget:aRouteTarget;
  if(uRoutePreset>4.5&&uWakeMotion<.5)source=target;
  float arrival=smoothstep(aIdentity.x*.12,1.,uRouteProgress);
  p=mix(source,target,arrival);
  float passage=sin(uRouteProgress*PI)*uWakeMotion;
  // Work / Project: open the same matter along depth, then settle around the frame.
  float explore=step(.5,uRoutePreset)*(1.-step(2.5,uRoutePreset));
  p.z-=passage*(3.+aIdentity.y*9.)*explore;
  p.xy+=aOffset.xy*passage*explore*1.6;
  p+=aOffset*sin(arrival*PI)*.25;
  next=p;
 }
 vec4 mv=modelViewMatrix*vec4(p,1.);
 vec3 displacement=pointerDisplacement(mv);
 mv.xyz+=displacement;
 vec4 clip=projectionMatrix*mv;
 vec4 nextView=modelViewMatrix*vec4(next,1.);nextView.xyz+=displacement;
 vec4 nextClip=projectionMatrix*nextView;
 vec2 velocity=(nextClip.xy/nextClip.w-clip.xy/clip.w)*uViewport;
 float speed=length(velocity);vDirection=speed>.001?normalize(velocity):vec2(1.,0.);vStretch=1.+min(speed*.3,3.)*uStretch;
 vBlur=min(abs(-mv.z-uFocus)*.12*uBlur,1.5);
 float large=step(1.-uLargeShare,aCharacter.x)*step(-mv.z,11.);
 float medium=step(.88,aCharacter.x)*(1.-large);
 // More substantial cores after the opening, tapering to quiet perimeter matter.
 float sectionBody=smoothstep(.52,.59,uProgress)*(1.-smoothstep(.92,.99,uProgress));
 float edgeRest=smoothstep(.86,.91,uProgress)*(1.-smoothstep(.92,.99,uProgress));
 float size=(1.+sectionBody*.10)*(1.+medium*.85*uDistribution+large*3.6*uDistribution)*(1.+vBlur*.25);
 gl_PointSize=clamp(uSize*uDpr*clamp(uViewport.y/900.,.85,1.25)*size*(10./-mv.z)*sqrt(vStretch),1.5*uDpr,12.*uDpr);
 vBrightness=(.48+aCharacter.z*.46+length(aOffset.xy)*.08)*(1.+uTwinkle*sin(uTime*.7+aIdentity.w))*exp(-max(0.,-mv.z-8.)*.04)/(1.+vBlur*.6);
 float born=(uProgress<.104 && uRouteProgress>=1.)?smoothstep((aIdentity.x*.28+abs(aIdentity.y-.5)*.84),(aIdentity.x*.28+abs(aIdentity.y-.5)*.84)+.26,uHomeIntro):1.;
 gl_PointSize*=mix(.35,1.,born);
 vBrightness*=uBrightness*mix(1.,.4,large)*smoothstep(.30,.9,uAwakening)*born;vBrightness*=1.-edgeRest*.2;vWarm=aCharacter.w;vGold=(1.-uRouteMix)*step(.52,uProgress)*step(.998,aIdentity.x);gl_Position=clip;
 if(uRouteEntry>.5)vBrightness*=mix(.06,1.,smoothstep(0.,1.,uRouteProgress));
 if(uRouteFromPreset>4.5&&uRoutePreset<4.5)vBrightness*=mix(step(.96,aIdentity.x)*1.1,1.,smoothstep(0.,1.,uRouteProgress));
 // Keep Contact sparse and low energy. Incoming source matter recedes progressively.
 if(uRoutePreset>4.5)vBrightness*=mix(1.,step(.96,aIdentity.x)*1.1,smoothstep(0.,1.,uRouteProgress));
}`;
export const fragmentShader = `
uniform vec3 uBone,uCream,uGold;
uniform float uCoreSize,uFalloffSize,uOpacity,uDensityResponse;
varying float vBrightness,vBlur,vStretch,vWarm,vGold;varying vec2 vDirection;
void main(){
 vec2 q=(gl_PointCoord-.5)*2.;
 q=vec2(dot(q,vDirection),dot(q,vec2(-vDirection.y,vDirection.x)));
 q.y*=vStretch;
 float r=length(q);if(r>1.)discard;
 // A readable central core, with a small low-energy shoulder; no bloom pass.
 float coreRadius=uCoreSize/(1.+vBlur*.14);
 float core=1.-smoothstep(coreRadius*.62,coreRadius,r);
 float shoulder=exp(-r*r/max(.025,uFalloffSize*uFalloffSize*.35))*.10;
 float coverage=(core+shoulder)*(1.-smoothstep(.8,1.,r));
 // Core energy controls how overlaps accumulate, without a density render pass.
 float alpha=coverage*vBrightness*uOpacity*mix(1.,uDensityResponse,core);
 vec3 color=mix(mix(uBone,uCream,vWarm*.35),uGold,vGold*.7);
 gl_FragColor=vec4(color,min(alpha,.94));
}
`;
