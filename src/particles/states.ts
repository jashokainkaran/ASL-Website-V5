import {roam} from './formations/roam';
import {cloud} from './formations/cloud';
import {helix} from './formations/helix';
import {filaments} from './formations/filaments';
import {logo} from './formations/logo';
import {edge} from './formations/edge';
import type {Generator} from './formations/shared';
/** Only opening targets stay resident. Sections use two replaceable buffers. */
export const formations: {name:string; attribute:string; generate:Generator; window:[number,number]}[] = [
 {name:'filaments',attribute:'position',generate:filaments,window:[0,0]},
 {name:'roam',attribute:'aRoamTarget',generate:roam,window:[0,0]},
 {name:'cloud',attribute:'aCloudTarget',generate:cloud,window:[.104,.2184]},
 {name:'helix',attribute:'aHelixTarget',generate:helix,window:[.2548,.3744]},
 {name:'logo',attribute:'aLogoTarget',generate:logo,window:[.4212,.494]},
 {name:'edge',attribute:'aEdgeTarget',generate:edge,window:[.86,.91]},
 {name:'final',attribute:'aLogoTarget',generate:logo,window:[.92,.99]},
];
export const OPENING_END=.52;
export function stateName(p:number) {
 if(p>=.52)return p<.61?'Design / Folded membrane':p<.69?'Development / Interlocking layers':p<.77?'Deployment / Ribbon flow':p<.86?'Digital products / Open shell':p<.92?'Rest / Edge field':'Final convergence';
 const h=p/OPENING_END;
 return h<.20?'Filaments':h<.42?'Filaments to Cloud':h<.49?'Dense cloud':h<.72?'Cloud to Spatial DNA':h<.81?'Spatial DNA':h<.95?'DNA to ASL':'ASL / Hero reveal';
}
