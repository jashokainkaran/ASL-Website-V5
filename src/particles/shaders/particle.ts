import {formations} from '../states';
export const vertexShader = `
${[...new Set(formations.map(f=>f.attribute))].map(attribute=>`attribute vec3 ${attribute};`).join('\n')}
attribute vec4 aIdentity; attribute vec4 aCharacter; attribute vec3 aOffset;
uniform float uRouteMix,uAwakening,uWakeMotion;
uniform float uTime,uProgress,uRate,uDpr,uSize,uDistribution,uLargeShare,uFocus,uBlur,uStretch,uTwinkle,uIdle,uCurve,uRadius,uStrength,uFalloff,uSwirl,uRecovery,uTrailWidth,uOctaves;
uniform int uTrailLength;
uniform vec3 uHistory[24];
uniform vec2 uViewport;
varying float vBrightness,vBlur,vStretch,vWarm,vGold,vTrail;
varying vec2 vDirection;
const float PI=3.14159265;
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
// Release travels from the ends toward the core. The original strand is pulled and
// untwisted before any flight toward a filament, preserving volume and continuity.
vec3 unravel(vec3 helix,float progress){
 float release=smoothstep(0.,1.,clamp((progress-.2704)/.050- (1.-abs(aIdentity.y*2.-1.))*.4,0.,1.));
 float turn=release*(aIdentity.y-.5)*2.8;
 mat2 rotation=mat2(cos(turn),-sin(turn),sin(turn),cos(turn));
 helix.yz=rotation*helix.yz;
 helix.y*=1.+release*.8;
 helix.x*=1.-release*.15;
 helix.x+=release*(aIdentity.y-.5)*5.;
 helix.z+=sin(aIdentity.y*PI*2.)*release*.8;
 return helix;
}
vec3 finalTarget(vec3 logo){
 bool mobile=uViewport.x<uViewport.y;
 float width=11.547*uViewport.x/uViewport.y;
 return vec3(logo.x*(mobile?.65:1.15)+width*(mobile?.20:.30),logo.y*(mobile?.65:1.15)+(mobile?1.35:-.5),logo.z);
}
vec3 positionAt(float time,float progress){
 vec3 p=${formations[0].attribute};
 ${formations.slice(1).map(f=>f.name==='filaments'?`p=transit(unravel(p,progress),aFilamentTarget,progress,.313,.374,time);`:`p=transit(p,${f.name==='final'?'finalTarget(aLogoTarget)':f.attribute},progress,${f.window[0].toFixed(4)},${f.window[1].toFixed(4)},time);`).join('\n')}
 float rest=1.-smoothstep(.4576,.4992,progress)*.82;
 float streamLife=smoothstep(.69,.75,progress)*(1.-smoothstep(.77,.84,progress));
 p.x+=sin(time*.65+aIdentity.y*18.)*.12*streamLife;
 float clusterLife=smoothstep(.77,.84,progress)*(1.-smoothstep(.86,.91,progress));
 p+=aOffset*sin(time*.5+aIdentity.y*PI*6.)*.18*clusterLife;
 p+=curl(p*.35,time*.12+aIdentity.w*.04)*uIdle*rest;
 p+=aOffset*sin(time*.2+aIdentity.w)*uIdle;
 vec3 identity=aLogoTarget;
 identity.y-=11.547*(uViewport.x<uViewport.y?.20:.16);
 float arrival=smoothstep(aIdentity.x*.12,1.,uRouteMix);
 p=mix(p,identity,arrival)+aOffset*sin(arrival*PI)*.25;
 float wake=sin(clamp(uAwakening,0.,1.)*PI);
 p.y+=sin(p.x*.45-uAwakening*7.)*wake*.16*uWakeMotion;
 return p;
}
void main(){
 vec3 p=positionAt(uTime,uProgress); vec3 original=p;vec3 next=positionAt(uTime+.016,uProgress+uRate*.016);
 vTrail=0.;
 for(int i=0;i<24;i+=2){if(i>=uTrailLength)break;vec3 h=uHistory[i];float age=max(0.,uTime-h.z);if(age>2.)continue;vec2 delta=p.xy-h.xy;float squared=dot(delta,delta);if(squared>uRadius*uRadius)continue;float dist=sqrt(squared);float strength=exp(-age*uRecovery)*pow(max(0.,1.-dist/uRadius),uFalloff);p.xy+=(delta+vec2(-delta.y,delta.x)*uSwirl)*strength*uStrength*exp(-float(i)*.25)*.25/aCharacter.y;vTrail+=exp(-dist*dist/(uTrailWidth*uTrailWidth))*exp(-age*2.)*.18;}
 next+=p-original;
 vec4 mv=modelViewMatrix*vec4(p,1.);vec4 clip=projectionMatrix*mv;
 vec4 nextClip=projectionMatrix*modelViewMatrix*vec4(next,1.);
 vec2 velocity=(nextClip.xy/nextClip.w-clip.xy/clip.w)*uViewport;
 float speed=length(velocity);vDirection=speed>.001?normalize(velocity):vec2(1.,0.);vStretch=1.+min(speed*.3,3.)*uStretch;
 vBlur=min(abs(-mv.z-uFocus)*.12*uBlur,1.5);
 float large=step(1.-uLargeShare,aCharacter.x)*step(-mv.z,11.);
 float medium=step(.88,aCharacter.x)*(1.-large);
 float size=(1.+medium*1.3*uDistribution+large*9.*uDistribution)*(1.+vBlur);
 gl_PointSize=clamp(uSize*uDpr*clamp(uViewport.y/900.,.85,1.25)*size*(10./-mv.z)*sqrt(vStretch),1.,26.*uDpr);
 vBrightness=(.30+aCharacter.z*.55+length(aOffset.xy)*.12)*(1.+uTwinkle*sin(uTime*.7+aIdentity.w))*exp(-max(0.,-mv.z-8.)*.04)/(1.+vBlur*.6);
 vBrightness*=mix(1.,.25,large)*smoothstep(.30,.9,uAwakening);vWarm=aCharacter.w;vGold=(1.-uRouteMix)*step(.52,uProgress)*step(.998,aIdentity.x);gl_Position=clip;
}`;
export const fragmentShader = `
uniform vec3 uBone,uCream,uGold;
varying float vBrightness,vBlur,vStretch,vWarm,vGold,vTrail;varying vec2 vDirection;
void main(){vec2 q=(gl_PointCoord-.5)*2.;q=vec2(dot(q,vDirection),dot(q,vec2(-vDirection.y,vDirection.x)));q.y*=vStretch;float r=length(q);if(r>1.)discard;
 float core=exp(-r*r*(22./(1.+vBlur*3.)));float edge=exp(-r*r*5.)*.24;float alpha=(core+edge)*(1.-smoothstep(.75,1.,r))*vBrightness;
 vec3 color=mix(mix(uBone,uCream,vWarm*.35),uGold,vGold*.7);gl_FragColor=vec4(color,alpha+vTrail*edge);}
`;
