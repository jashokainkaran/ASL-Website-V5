import Image from 'next/image';
import Link from 'next/link';
import type {Project} from '@/content/projects';
export function ProjectEntry({project, index}: {project: Project; index: number}) {
  const destination = project.caseStudyPath || project.externalUrl;
  const media = <div className="project-media-depth">
    <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes={index % 3 === 2 ? '(max-width: 700px) 88vw, 78vw' : '(max-width: 700px) 88vw, 66vw'} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'}/>
    {destination && <span className="project-media-action" aria-hidden="true">↗</span>}
  </div>;
  return <article className="project-entry" data-project={project.slug} data-composition={index % 3} aria-labelledby={`project-${project.slug}`}>
    <div className="project-index eyebrow"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.type}</span></div>
    <div className="project-copy"><div className="eyebrow project-status">{[project.type, project.category].filter(Boolean).join(' · ')}</div>
      <h2 id={`project-${project.slug}`}>{destination ? <Link href={destination} aria-label={`Visit ${project.title} website${project.caseStudyPath ? '' : ' (opens in a new tab)'}`} target={project.caseStudyPath ? undefined : '_blank'} rel={project.caseStudyPath ? undefined : 'noopener noreferrer'}>{project.title} <span className="project-title-arrow" aria-hidden="true">↗</span></Link> : project.title}</h2><p>{project.shortDescription}</p>
      <ul className="project-disciplines" aria-label="Disciplines">{project.disciplines.map(item => <li key={item}>{item}</li>)}</ul>
    </div><div className="project-media">{destination ? <Link href={destination} aria-label={`Visit ${project.title} website${project.caseStudyPath ? '' : ' (opens in a new tab)'}`} target={project.caseStudyPath ? undefined : '_blank'} rel={project.caseStudyPath ? undefined : 'noopener noreferrer'}>{media}</Link> : media}
    {project.cover.video && <video controls preload="none" playsInline poster={project.cover.src} aria-label={`${project.title} project film`}><source src={project.cover.video}/></video>}</div>
  </article>;
}
