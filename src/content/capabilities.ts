export type Capability = { name: string; description: string; descriptor: string; formation: string; material: string; isPlaceholder: false };
/** Current working production copy supplied by ASL. Anchors remain stable. */
export const capabilities: Capability[] = [
 {name:'Design', description:'We turn ideas into clear, distinctive digital experiences — from structure and interface to motion and interaction.', descriptor:'Experience shaped with intention.', formation:'lattice', material:'Folded membrane', isPlaceholder:false},
 {name:'Development', description:'We engineer those experiences into fast, responsive and maintainable websites and digital products.', descriptor:'Built to hold up beyond launch.', formation:'strata', material:'Interlocking layers', isPlaceholder:false},
 {name:'Deployment', description:'We take the work from local build to live product, handling the infrastructure and technical details needed for a clean launch.', descriptor:'From build to production.', formation:'stream', material:'Ribbon flow', isPlaceholder:false},
 {name:'Digital Products', description:'When the idea goes beyond a website, we design and build product experiences, prototypes and web-based tools.', descriptor:'Ideas shaped into working products.', formation:'cluster', material:'Open shell', isPlaceholder:false},
];
