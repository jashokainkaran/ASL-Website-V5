import Link from 'next/link';
import {capabilities} from '@/content/capabilities';
import {ASLLogo} from './brand/ASLLogo';
import {site,bookingUrl} from '@/content/site';
import {navigation} from '@/content/navigation';
import {Logo} from './Logo';
export function HomeSections(){return <>
 <section className="capabilities" aria-label="Capabilities" id="capabilities">{capabilities.map((cap,i)=><article className="capability" id={cap.formation} key={cap.name} data-chapter={i}><div className="capability-top eyebrow"><span>{site.capabilityLabel}</span><span>0{i+1} / 04</span></div><div className="capability-copy"><div className="eyebrow capability-beat">{site.beats[i]}</div><h2><Link href={`/capabilities#${cap.formation}`}>{cap.name}</Link></h2><p>{cap.description}</p><Link className="text-link" href={`/capabilities#${cap.formation}`}>{site.capabilityLink}<span aria-hidden="true">↗</span></Link></div><div className="capability-bottom eyebrow"><span>{site.materialLabel}</span><span>{cap.formation}</span></div></article>)}</section>
 <section className="statement production-statement" id="statement"><div className="eyebrow">{site.statementLabel}</div><h2>{site.statement}</h2></section>
 <section className="final-conversion" id="final"><div className="eyebrow">{site.finalLabel}</div><Logo className="final-static-logo"/><div className="final-copy"><h2>{site.closing}</h2><Link className="button" href={bookingUrl}>{site.primary}<span aria-hidden="true">↗</span></Link></div></section>
 <footer className="site-footer"><div className="footer-top"><Link className="wordmark" href="/" aria-label="ASL home"><ASLLogo className="footer-logo"/></Link><nav aria-label="Footer navigation">{navigation.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="footer-contact"><span className="eyebrow">{site.emailLabel}</span><span>{site.email}</span></div></div><div className="footer-bottom eyebrow"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.footerLine}</span><span>{site.provisionalLabel}</span></div></footer>
 </>;}
