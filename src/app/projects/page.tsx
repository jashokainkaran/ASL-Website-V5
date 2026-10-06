import Link from 'next/link';
import {publishedProjects, projectsCopy as copy} from '@/content/projects';
import {ProjectEntry} from '@/components/projects/ProjectEntry';
import {RouteEditorialMotion} from '@/components/RouteEditorialMotion';
import {ProjectsMotion} from '@/components/projects/ProjectsMotion';
import {SiteFooter} from '@/components/SiteFooter';
import {pageMetadata} from '@/lib/metadata';
export const metadata = {...pageMetadata('Projects', publishedProjects.length ? 'Explore selected websites, digital experiences and product work by ASL, created through design, development and technology.' : 'Selected ASL work is being prepared for publication. Explore our capabilities or start a conversation about your project.'), alternates: {canonical: '/projects'}};
export default function ProjectsPage() {
  const clients = publishedProjects.filter(project => project.type === 'Client project');
  const concepts = publishedProjects.filter(project => project.type === 'ASL Concept');
  return <><main id="main-content" tabIndex={-1} className="projects-page"><ProjectsMotion/><RouteEditorialMotion selector=".projects-page"/>
    <section className="projects-intro"><div className="route-heading eyebrow" data-editorial-detail><span>ASL / {copy.eyebrow}</span><span>Design · Engineering · Technology</span></div>
      <h1><span className="editorial-mask"><span data-editorial-line>Projects shaped</span></span><span className="editorial-mask"><span data-editorial-line>from idea to</span></span><span className="editorial-mask"><em data-editorial-line>experience.</em></span></h1>
      <div className="projects-intro-bottom" data-editorial-detail><p>{copy.introduction}</p><a className="text-link" href="#archive">Explore the archive <span aria-hidden="true">↓</span></a></div>
    </section>
    <div id="archive" className="project-archive">
      {!publishedProjects.length && <section className="archive-publication" aria-labelledby="publication-title">
        <div className="publication-meta eyebrow"><span>Selected work</span><span>In preparation</span></div>
        <div className="archive-aperture" aria-hidden="true"><span className="archive-coordinate eyebrow">Matter / In formation</span><svg className="archive-trace" viewBox="0 0 500 380"><path d="M20 340 C420 300 30 40 480 20"/></svg></div>
        <div className="publication-copy"><h2 id="publication-title">{copy.emptyHeading}</h2><p>{copy.emptyBody}</p><div className="cta-row"><Link className="text-link" href="/capabilities">Explore Capabilities <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link></div></div>
      </section>}
      {clients.map((project, index) => <ProjectEntry key={project.slug} project={project} index={index}/>)}
      {!!concepts.length && <section aria-labelledby="concepts-title" className="concepts-archive"><div className="concepts-intro"><h2 id="concepts-title">{copy.conceptsHeading}</h2><p>{copy.conceptsBody}</p></div>{concepts.map((project, index) => <ProjectEntry key={project.slug} project={project} index={index + clients.length}/>)}</section>}
    </div>
    <section className="projects-conversion"><div className="eyebrow">Your next project</div><h2>{copy.ctaHeading}</h2><p>{copy.ctaBody}</p><Link className="button" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link></section>
  </main><SiteFooter/></>;
}
