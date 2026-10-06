export type PointerProfile = {radius:number; strength:number; depth:number; recovery:number};
export const pointerProfiles = {
 filaments:{radius:.85,strength:.42,depth:.16,recovery:1.1},
 cloud:{radius:1,strength:1,depth:.3,recovery:.85},
 dna:{radius:.78,strength:.70,depth:.22,recovery:1.05},
 mark:{radius:.78,strength:1,depth:.12,recovery:1},
 membrane:{radius:.9,strength:.65,depth:.32,recovery:.95},
 layers:{radius:.85,strength:.78,depth:.26,recovery:1},
 ribbons:{radius:.85,strength:.5,depth:.14,recovery:1.15},
 shell:{radius:.88,strength:.8,depth:.34,recovery:.95},
 rest:{radius:.75,strength:.2,depth:.08,recovery:1.2},
 final:{radius:.78,strength:.65,depth:.12,recovery:1},
} satisfies Record<string,PointerProfile>;
export type PointerState = keyof typeof pointerProfiles;
const stops:[PointerState,number,number][] = [
 ['cloud',.104,.2184],['dna',.2548,.3744],['mark',.4212,.494],
 ['membrane',.52,.59],['layers',.61,.67],['ribbons',.69,.75],
 ['shell',.77,.84],['rest',.86,.91],['final',.92,.99],
];
/** Derives all interaction tuning from canonical progress; no new scroll source. */
export function resolvePointerProfile(progress:number,out:PointerProfile){
 Object.assign(out,pointerProfiles.filaments);
 for(const [name,start,end] of stops){
  if(progress<=start)break;
  const t=Math.min(1,(progress-start)/(end-start));
  const eased=t*t*(3-2*t),next=pointerProfiles[name];
  for(const key of ['radius','strength','depth','recovery'] as const)out[key]+=(next[key]-out[key])*eased;
 }
 return out;
}
