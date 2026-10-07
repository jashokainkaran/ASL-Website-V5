import {hash, sample, type Context} from './shared';
import {tubePoint,type Point3,type Path3} from './tube';

export const capabilityTuning = {
  pathCount: 8, weaveStrength: .7, curvature: 1, depthSpread: 1, tension: .75,
  nodeCount: 6, connectionDensity: .9, architectureDepth: 1, alignment: 1,
  propagationSpeed: .32, frontWidth: .18, streamCount: 7, propagationSpread: 1, propagationDepth: 1,
  moduleCount: 4, moduleRadius: 1, connectionStrength: .7, synchronisation: .8, spatialSpread: 1,
};
// A braced cantilever: two chords, three bays, then selective diagonal load paths.
const anchors:Point3[]=[[-.46,-.27,0],[-.46,.19,0],[0,-.27,0],[0,.36,0],[.46,-.27,0],[.46,.19,0]];
const braces=[[0,2],[2,4],[1,3],[3,5],[0,1],[2,3],[4,5],[0,3],[3,4],[1,2],[2,5]];
const modules:Point3[]=[[-.28,.24,-.5],[.25,.27,.5],[.31,-.22,-.6],[-.22,-.24,.55],[0,.03,-.8],[.42,.04,.1]];

/** Adjacent lazy buffers retain their particle indices and longitudinal coordinate. */
export function capabilitySystem(index:number, count:number, c:Context, homeMobile=false) {
  const k=capabilityTuning, mobile=homeMobile||c.width<c.height;
  const width=c.width*(homeMobile?.30:mobile?.76:.32),height=c.height*(homeMobile?.32:mobile?.20:.48);
  const side=index%2===0?1:-1;
  const place=([x,y,z]:Point3):Point3=>{
    const yaw=.30,roll=-.10;
    const depth=homeMobile?.45:1;
    const px=x*width*Math.cos(yaw)+z*depth*Math.sin(yaw);
    const pz=-x*width*Math.sin(yaw)+z*depth*Math.cos(yaw);
    return [px*Math.cos(roll)-y*height*Math.sin(roll)+(homeMobile?side*c.width*.27:mobile?0:side*c.width*.27),px*Math.sin(roll)+y*height*Math.cos(roll)+(homeMobile?-c.height*(c.width/c.height>.52?.20:.10):mobile?c.height*.26:0),pz];
  };
  return sample(count,(u,i)=>{
    if(index===0){
      const paths=mobile?Math.min(8,k.pathCount):k.pathCount;
      const lane=i%(paths*2),family=lane<paths?0:1;
      const f=(lane%paths)/(paths-1)-.5;
      // Warp and weft share one tensioned saddle, alternating over/under at crossings.
      const path:Path3=t=>{
        const s=t-.5,x=family===0?s:f,y=family===0?f:s;
        const crossing=Math.cos(t*(paths-1)*Math.PI)*((lane%2)*2-1);
        const z=((x*x-y*y)*8*k.curvature*k.weaveStrength+crossing*.10*(family===0?1:-1))*k.depthSpread;
        const sy=y*.78*(.8+k.tension*.2);
        return place([x*.92,sy*Math.cos(.42)-z*Math.sin(.42)/height,sy*height*Math.sin(.42)+z*Math.cos(.42)]);
      };
      return tubePoint(path,u,i,(mobile?.035:.065)*(.72+.28*Math.sin(u*Math.PI)));
    }
    if(index===1){
      const edges=Math.max(5,Math.round(braces.length*k.connectionDensity));
      const edge=braces[i%edges],layer=Math.floor(i/edges)%3-1;
      const a=anchors[edge[0]%k.nodeCount],b=anchors[edge[1]%k.nodeCount];
      const path:Path3=t=>place([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t+Math.sin(t*Math.PI)*.025*(1-k.alignment),layer*.50*k.architectureDepth]);
      const joint=u<.08||u>.92;
      const t=joint?(u<.08?u*.25:1-(1-u)*.25):(u-.08)/.84;
      return tubePoint(path,t,i,joint?(mobile?.07:.14):(mobile?.032:.065));
    }
    if(index===2){
      const lane=i%k.streamCount,f=lane/(k.streamCount-1)-.5;
      const path:Path3=t=>{
        const fan=t*t*(3-2*t);
        return place([(t-.5)*1.05,f*(.12+fan*.74)*k.propagationSpread,.25*Math.sin(t*Math.PI)+f*fan*1.65*k.propagationDepth]);
      };
      return tubePoint(path,u,i,(mobile?.04:.08)*(.65+.35*Math.sin(u*Math.PI))*(.7+k.frontWidth));
    }
    const total=mobile?Math.min(4,k.moduleCount):k.moduleCount;
    const group=i%total,a=modules[group],b=modules[(group+1)%total];
    const body=1-(.08+.20*k.connectionStrength);
    if(u>body){
      return tubePoint(t=>place([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t+Math.sin(t*Math.PI)*.18]),(u-body)/(1-body),i,mobile?.025:.045);
    }
    // Each module is a stack of three open plates with shared connection ports.
    const t=u/body,v=hash(i,2)-.5,layer=Math.floor(hash(i,3)*3)-1;
    const radius=(.10+group*.008)*k.moduleRadius;
    const x=(t-.5)*radius*2.4,y=v*radius*1.65;
    const turn=group%2===0?.52:-.42;
    const dz=layer*.28+Math.sin(t*Math.PI)*.035+(hash(i,5)-.5)*.025;
    const py=y*height*Math.cos(.72)-dz*Math.sin(.72);
    const pz=y*height*Math.sin(.72)+dz*Math.cos(.72);
    const p:Point3=[(a[0]+(x*width*Math.cos(turn)+pz*Math.sin(turn))/width)*k.spatialSpread,(a[1]+py/height)*k.spatialSpread,a[2]-x*width*Math.sin(turn)+pz*Math.cos(turn)];
    return place(p);
  });
}
