/** Ordered paths use packed longitudinal identities, with no additional target attribute. */
export const organiseShader = `
vec3 organisedPosition(){
 float width=11.547*uViewport.x/uViewport.y;
 bool mobile=uViewport.x<uViewport.y;
 float lane=mod(aIdentity.z,7.);
 float t=aIdentity.y;
 float x=(t-.5)*width*(mobile?.82:.42)+(mobile?0.:width*.27);
 float y=(lane-3.)*(mobile?.07:.23)+sin(t*PI)*(mobile?.12:.25)+(mobile?3.05:.4);
 return vec3(x,y,-1.+lane*.18+aOffset.z*.05);
}
`;
