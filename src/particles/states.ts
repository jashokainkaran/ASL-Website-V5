import {surface} from './formations/surface';
import {sculpture} from './formations/sculpture';
import {lattice} from './formations/lattice';
import {strata} from './formations/strata';
import {stream} from './formations/stream';
import {cluster} from './formations/cluster';
import {edge} from './formations/edge';
import {roam} from './formations/roam';
import {cloud} from './formations/cloud';
import {helix} from './formations/helix';
import {filaments} from './formations/filaments';
import {logo} from './formations/logo';
import type {Generator} from './formations/shared';
export const formations: {name:string; attribute:string; generate:Generator; window:[number,number]}[] = [
 {name:'roam',attribute:'position',generate:roam,window:[0,0]},
 {name:'cloud',attribute:'aCloudTarget',generate:cloud,window:[.065,.13]},
 {name:'helix',attribute:'aHelixTarget',generate:helix,window:[.125,.208]},
 {name:'filaments',attribute:'aFilamentTarget',generate:filaments,window:[.27,.322]},
 {name:'surface',attribute:'aSurfaceTarget',generate:surface,window:[.342,.390]},
 {name:'sculpture',attribute:'aSculptureTarget',generate:sculpture,window:[.401,.434]},
 {name:'logo',attribute:'aLogoTarget',generate:logo,window:[.451,.493]},
 {name:'lattice',attribute:'aLatticeTarget',generate:lattice,window:[.52,.59]},
 {name:'strata',attribute:'aStrataTarget',generate:strata,window:[.61,.67]},
 {name:'stream',attribute:'aStreamTarget',generate:stream,window:[.69,.75]},
 {name:'cluster',attribute:'aClusterTarget',generate:cluster,window:[.77,.84]},
 {name:'edge',attribute:'aEdgeTarget',generate:edge,window:[.86,.91]},
 {name:'final',attribute:'aLogoTarget',generate:logo,window:[.92,.99]},
];
export const OPENING_END=.52;
export function stateName(p:number) {if(p>.52)return p<.61?'Design / Lattice':p<.69?'Development / Strata':p<.77?'Deployment / Stream':p<.86?'Digital products / Cluster':p<.92?'Rest / Edge field':'Final convergence';return p<.065?'Roaming field':p<.13?'Dense cloud':p<.245?'Spatial DNA':p<.30?'Unravelling':p<.342?'Braided filaments':p<.401?'Folded surface':p<.451?'Sculpture':p<.493?'ASL mark':'Hero reveal';}
