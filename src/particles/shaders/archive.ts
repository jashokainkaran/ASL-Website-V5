/** Folded material sheets share the persistent population and packed identities. */
export const archiveShader = `
vec3 archivePosition(float time,float progress){
 float score=clamp((progress-.91)/.0008,0.,1.);
 float lane=floor(aIdentity.y*3.);
 float t=fract(aIdentity.y*3.);
 float height=11.547;
 float width=height*uViewport.x/uViewport.y;
 float phase=t*PI*1.65+lane*.72+sin(time*.17)*.16;
 float turn=smoothstep(.12,.62,score);
 float retreat=smoothstep(.65,1.,score);
 float side=mix(.26,-.25,turn);
 vec3 ribbon=vec3(width*(side+.16*sin(phase)),height*(.55-1.1*t),-2.5+cos(phase)*2.2);
 ribbon.x+=aOffset.x*(.35+.7*sin(t*PI));
 ribbon.y+=aOffset.y*.28+sin(time*.22+phase)*.16;
 ribbon.z+=aOffset.z*.65;
 ribbon=mix(ribbon,aEdgeTarget,retreat);
 return mix(aEdgeTarget,ribbon,uWakeMotion);
}
`;
