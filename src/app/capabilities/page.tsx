import Link from 'next/link';
import Image from 'next/image';
import {capabilitiesPage as copy, capabilityServices} from '@/content/capabilities-page';
import {publishedProjects} from '@/content/projects';
import {CapabilitiesMotion} from '@/components/capabilities/CapabilitiesMotion';
import {CapabilityFallback} from '@/components/capabilities/CapabilityFallback';
import {RouteEditorialMotion} from '@/components/RouteEditorialMotion';
import {SiteFooter} from '@/components/SiteFooter';
import {pageMetadata} from '@/lib/metadata';
export const metadata = {...pageMetadata('Capabilities', "Explore ASL's capabilities across digital design, web development, deployment and digital products."), title: {absolute: 'Capabilities | ASL'}, alternates: {canonical: '/capabilities'}};
export default function CapabilitiesPage() {
  const project = publishedProjects.find(item => item.featured);
  return <><main id="main-content" tabIndex={-1} className="capabilities-page">
    <CapabilitiesMotion/><RouteEditorialMotion selector=".capabilities-page"/>
    <noscript><style>{'.capability-vector{display:block}'}</style></noscript>
    <section className="capabilities-intro">
      <div className="route-heading eyebrow" data-editorial-detail><span>Capabilities</span><span>Design / Development / Deployment / Digital Products</span></div>
      <h1 aria-label={copy.heading}><span className="editorial-mask"><span data-editorial-line>From idea to</span></span><span className="editorial-mask"><em data-editorial-line>working product.</em></span></h1>
      <div className="capabilities-intro-bottom" data-editorial-detail><p>{copy.introduction}</p><div className="cta-row"><Link className="button" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/projects">Explore Our Work <span aria-hidden="true">↗</span></Link></div></div>
      <nav className="capability-index" aria-label="On this page" data-editorial-detail>{capabilityServices.map((cap, index) => <a href={`#${cap.anchor}`} key={cap.anchor}><span>0{index + 1}</span>{cap.name}</a>)}</nav>
    </section>
    <div className="capabilities-chapters">{capabilityServices.map((cap, index) => <section key={cap.anchor} id={cap.anchor} className="service-chapter" data-service={index} aria-labelledby={`service-${cap.anchor}`}>
      <div className="service-rule" aria-hidden="true"/><div className="service-top eyebrow"><span>0{index + 1} / 04</span><span>{cap.material}</span></div>
      <div className="service-visual" aria-hidden="true"><CapabilityFallback index={index}/></div>
      <div className="service-copy"><div className="service-number" aria-hidden="true">0{index + 1}</div><h2 id={`service-${cap.anchor}`}>{cap.name}</h2><p className="service-statement">{cap.statement}</p><p className="service-description">{cap.description}</p><ul className="service-list" aria-label={`${cap.name} services`}>{cap.services.map(service => <li key={service}>{service}</li>)}</ul></div>
    </section>)}</div>
    <section className="capabilities-connect" id="connected"><div className="eyebrow">Connected capabilities</div><h2>{copy.connectionHeading}</h2><p>{copy.connection}</p><div className="connection-line" aria-hidden="true">Design <span>→</span> Development <span>→</span> Deployment <span>→</span> Digital Products</div></section>
    <section className="capabilities-bridge"><div><div className="eyebrow">Selected projects</div><h2>{copy.bridgeHeading}</h2><p>{copy.bridge}</p><Link className="text-link" href="/projects">Explore Projects <span aria-hidden="true">↗</span></Link></div>{project && <Link className="bridge-preview" href="/projects" aria-label={`Explore Projects, including ${project.title}`}><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading="lazy" sizes="(max-width: 700px) 88vw, 42vw"/><span className="eyebrow">{project.title} / ASL Concept <span aria-hidden="true">↗</span></span></Link>}</section>
    <section className="capabilities-conversion"><div className="eyebrow">Your next project</div><h2>{copy.ctaHeading}</h2><p>{copy.cta}</p><Link className="button" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link></section>
  </main><SiteFooter/></>;
}
