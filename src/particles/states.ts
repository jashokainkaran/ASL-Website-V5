import {roam} from './formations/roam';
import {cloud} from './formations/cloud';
import {helix} from './formations/helix';
import {filaments} from './formations/filaments';
import {logo} from './formations/logo';
import type {Generator} from './formations/shared';
export const formations: {name:string; attribute:string; generate:Generator; window:[number,number]}[] = [
 {name:'roam',attribute:'aRoamTarget',generate:roam,window:[0,0]},
 {name:'cloud',attribute:'aCloudTarget',generate:cloud,window:[.15,.285]},
 {name:'helix',attribute:'aHelixTarget',generate:helix,window:[.26,.46]},
 {name:'filaments',attribute:'aFilamentTarget',generate:filaments,window:[.52,.70]},
 {name:'logo',attribute:'aLogoTarget',generate:logo,window:[.80,.94]},
];
export function stateName(p:number) {return p<.15?'Roaming field':p<.28?'Dense cloud':p<.52?'DNA helix':p<.69?'Unravelling':p<.82?'Sweeping filaments':p<.94?'ASL mark':'Hero reveal';}
