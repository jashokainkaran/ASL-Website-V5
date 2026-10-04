import Link from 'next/link';
import {ResidualMatter} from './motion/ResidualMatter';
import {Phrase,Rule} from './motion/Editorial';
import {capabilities} from '@/content/capabilities';
import {ASLLogo} from './brand/ASLLogo';
import {site,bookingUrl} from '@/content/site';
import {navigation} from '@/content/navigation';
import {Logo} from './Logo';
export function HomeSections(){return <><ResidualMatter/>
 <section className="capabilities" aria-label="Capabilities" id="capabilities">{capabilities.map((cap,i)=><article className="capability" id={cap.formation} key={cap.name} data-chapter={i}><Rule className="chapter-rule"/><div className="chapter-number" aria-hidden="true"><Phrase>0{i+1}</Phrase></div><div className="capability-top eyebrow" data-reveal="detail"><span>{site.capabilityLabel}</span><span>0{i+1} / 04</span></div><div className="capability-copy"><div data-reveal="detail" className="eyebrow capability-beat">{site.beats[i]}</div><h2><Link href={`/capabilities#${cap.formation}`}><Phrase>{cap.name}</Phrase></Link></h2><p data-reveal="detail">{cap.description}</p><Link data-reveal="action" className="text-link" href={`/capabilities#${cap.formation}`}>{site.capabilityLink}<span aria-hidden="true">↗</span></Link></div><div className="capability-bottom eyebrow"><span>{site.materialLabel}</span><span>{cap.formation}</span></div></article>)}</section>
 <section className="statement production-statement" id="statement"><div className="eyebrow" data-reveal="detail">{site.statementLabel}</div><Rule/><h2><span className="statement-premise"><Phrase>Most websites</Phrase><Phrase>are assembled.</Phrase></span><span className="statement-answer"><Phrase>Ours are</Phrase><Phrase><em>shaped.</em></Phrase></span></h2></section>
 <section className="final-conversion" id="final"><div className="eyebrow" data-reveal="detail">{site.finalLabel}</div><Rule className="final-rule"/><Logo className="final-static-logo"/><div className="final-copy"><h2><Phrase>Let’s build something</Phrase><Phrase>that holds its shape.</Phrase></h2><Link data-reveal="action" className="button" href={bookingUrl}>{site.primary}<span aria-hidden="true">↗</span></Link></div></section>
 <footer className="site-footer"><div className="footer-top"><Link className="wordmark" href="/" aria-label="ASL home"><ASLLogo className="footer-logo"/></Link><nav aria-label="Footer navigation">{navigation.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="footer-contact"><span className="eyebrow">{site.emailLabel}</span><span>{site.email}</span></div></div><div className="footer-bottom eyebrow"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.footerLine}</span><span>{site.provisionalLabel}</span></div></footer>
 </>;}
