import {BufferGeometry,BufferAttribute,Vector3,PerspectiveCamera} from 'three';
import {formations} from '../states';
import {hash,type Context} from '../formations/shared';
export function makeGeometry(count:number,context:Context) {
 const g=new BufferGeometry(); const targets:Record<string,Float32Array>={};
 for(const f of formations){const existing=g.getAttribute(f.attribute);const target=existing?existing.array as Float32Array:f.generate(count,context);targets[f.name]=target;if(!existing)g.setAttribute(f.attribute,new BufferAttribute(target,3));}
 g.setAttribute('position',new BufferAttribute(targets.roam,3));
 const a=new Float32Array(count*4), b=new Float32Array(count*4), offsets=new Float32Array(count*3);
 for(let i=0;i<count;i++){a.set([hash(i),i/(count-1),i%7,hash(i,10)*6.283],i*4);b.set([hash(i,11),.4+hash(i,12)*1.6,hash(i,13),hash(i,14)],i*4);offsets.set([hash(i,15)-.5,hash(i,16)-.5,hash(i,17)-.5],i*3);}
 g.setAttribute('aIdentity',new BufferAttribute(a,4));g.setAttribute('aCharacter',new BufferAttribute(b,4));g.setAttribute('aOffset',new BufferAttribute(offsets,3));
 return {geometry:g,targets};
}
export function projectedBounds(targets:Record<string,Float32Array>,aspect:number) {
 const camera=new PerspectiveCamera(60,aspect,.1,100);camera.position.z=10;camera.updateMatrixWorld(); const v=new Vector3();
 return Object.fromEntries(Object.entries(targets).map(([name,p])=>{let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;for(let i=0;i<p.length;i+=3){v.set(p[i],p[i+1],p[i+2]).project(camera);minX=Math.min(minX,v.x);maxX=Math.max(maxX,v.x);minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);}return [name,{width:Math.round((maxX-minX)*50),height:Math.round((maxY-minY)*50)}];}));
}
