import gsap from 'gsap';
/** A paused, reversible score. Its caller supplies canonical scene progress. */
export function editorialScore(root:Element, reduced:boolean) {
 const score=gsap.timeline({paused:true});
 const rules=root.querySelectorAll('[data-reveal="rule"]');
 const phrases=root.querySelectorAll('[data-reveal="phrase"]');
 const details=root.querySelectorAll('[data-reveal="detail"]');
 const actions=root.querySelectorAll('[data-reveal="action"]');
 if(rules.length)score.fromTo(rules,{scaleX:0},{scaleX:1,duration:.5,stagger:.08,ease:'power2.inOut'},0);
 if(phrases.length)score.fromTo(phrases,{yPercent:reduced?25:105,opacity:0},{yPercent:0,opacity:1,duration:.6,stagger:.12,ease:'power3.out'},.12);
 if(details.length)score.fromTo(details,{y:reduced?4:16,opacity:0},{y:0,opacity:1,duration:.4,stagger:.07,ease:'power2.out'},.45);
 if(actions.length)score.fromTo(actions,{y:reduced?3:10,opacity:0},{y:0,opacity:1,duration:.35,ease:'power2.out'},.7);
 return score;
}
export const progressBetween=(p:number,start:number,end:number)=>gsap.utils.clamp(0,1,(p-start)/(end-start));
