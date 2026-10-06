import {hash, sample, type Context} from './shared';

/** Route-only systems. Index and longitudinal coordinate survive; grouping derives from identity. */
export const capabilityTuning = {
  pathCount: 8, weaveStrength: .7, curvature: 1, depthSpread: 1, tension: .75,
  nodeCount: 6, connectionDensity: .9, architectureDepth: 1, alignment: 1,
  propagationSpeed: .32, frontWidth: .18, streamCount: 7, propagationSpread: 1, propagationDepth: 1,
  moduleCount: 4, moduleRadius: 1, connectionStrength: .7, synchronisation: .8, spatialSpread: 1,
};
const nodes = [[-.43,-.22,-.6],[-.16,.32,.8],[.08,-.10,-1.1],[.34,.25,.4],[.43,-.30,1.1],[-.27,-.36,.5]];
const edges = [[0,2],[1,2],[2,3],[2,5],[3,4],[1,3],[0,5],[4,5]];
const modules = [[-.32,.23,-.5],[.26,.30,.6],[-.15,-.25,.7],[.37,-.17,-.9],[.02,.02,-1.1],[.44,.10,.4]];

export function capabilitySystem(index:number, count:number, c:Context) {
  const k=capabilityTuning, mobile=c.width<c.height;
  const width=c.width*(mobile?.80:.34), height=c.height*(mobile?.24:.54);
  const side=index%2===0?1:-1;
  return sample(count,(u,i)=>{
    const paths=mobile?Math.min(6,k.pathCount):k.pathCount;
    const lane=i%paths, v=hash(i,2)-.5, w=hash(i,3)-.5;
    let x=0,y=0,z=0;
    if(index===0){
      const f=lane/(paths-1)-.5;
      // Two families under tension: crossings occupy different depth planes.
      const family=lane%2===0?1:-1;
      x=(u-.5)*.95+Math.sin(u*Math.PI)*f*.14*k.weaveStrength;
      y=f*.72+Math.sin(u*Math.PI*1.3+f*2)*family*.20*k.curvature*(1-k.tension*.3);
      z=(Math.cos(u*Math.PI*2+f*3)*.8*k.weaveStrength+f*1.5)*k.depthSpread;
      y+=v*.038*Math.sin(u*Math.PI);z+=w*.16;
    }else if(index===1){
      const edge=edges[i%Math.max(3,Math.round(edges.length*k.connectionDensity))];
      const a=nodes[edge[0]%k.nodeCount],b=nodes[edge[1]%k.nodeCount];
      // Dense suspended anchors plus selective paths; no closed bounding box.
      const t=u<.12?0:u>.88?1:(u-.12)/.76;
      x=a[0]+(b[0]-a[0])*t;
      y=a[1]+(b[1]-a[1])*t+Math.sin(t*Math.PI)*.07*(1-k.alignment);
      z=(a[2]+(b[2]-a[2])*t)*k.architectureDepth;
      const plane=Math.floor(i/8)%3-1;
      x+=plane*.022;y+=plane*.035;z+=plane*.55*k.architectureDepth;
      const radius=u<.12||u>.88?.020:.010;
      const angle=hash(i,4)*Math.PI*2, r=Math.sqrt(hash(i,5))*radius;
      x+=Math.cos(angle)*r;y+=Math.sin(angle)*r;z+=v*radius*2;
    }else if(index===2){
      const stream=i%k.streamCount, f=stream/(k.streamCount-1)-.5;
      // Delayed fronts and separated trajectories spread from a common release.
      const front=Math.floor(u*3), t=(u*3-front);
      x=(t-.5)*1.03;
      y=f*(.24+t*.55)*k.propagationSpread+Math.sin(t*2.4+f)*.06;
      z=(front-1)*.7+f*t*2*k.propagationDepth;
      x+=v*k.frontWidth*.15;y+=w*.017;
    }else{
      const total=mobile?Math.min(4,k.moduleCount):k.moduleCount;
      const group=i%total, a=modules[group], b=modules[(group+1)%total];
      const body=1-(.08+.20*k.connectionStrength);
      if(u>body){
        const t=(u-body)/(1-body);
        x=a[0]+(b[0]-a[0])*t;y=a[1]+(b[1]-a[1])*t;
        z=a[2]+(b[2]-a[2])*t+Math.sin(t*Math.PI)*.12;
        y+=v*.012*k.connectionStrength;
      }else{
        const t=u/body, radius=(.075+group*.017)*k.moduleRadius;
        // Independent, layered irregular modules rather than spheres or shells.
        const localX=(t-.5)*radius*2.6;
        const localY=v*radius*Math.pow(Math.sin(t*Math.PI),.45);
        const angle=(group-1.5)*.32;
        x=a[0]+localX*Math.cos(angle)-localY*Math.sin(angle);
        y=a[1]+localX*Math.sin(angle)+localY*Math.cos(angle);
        z=a[2]+w*radius*1.4+Math.sin(t*Math.PI)*radius;
      }
      x*=k.spatialSpread;y*=k.spatialSpread;
    }
    return [x*width+(mobile?0:side*c.width*.27),y*height+(mobile?c.height*.13:0),z];
  });
}
