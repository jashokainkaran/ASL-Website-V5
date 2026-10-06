import Link from 'next/link';
import {ASLLogo} from './brand/ASLLogo';
import {navigation} from '@/content/navigation';
import {site} from '@/content/site';
export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top">
    <Link className="wordmark" href="/" aria-label="ASL home"><ASLLogo className="footer-logo"/></Link>
    <nav aria-label="Footer navigation">{navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    {!site.emailIsPlaceholder && site.email && <div className="footer-contact"><span className="eyebrow">{site.emailLabel}</span><a href={`mailto:${site.email}`}>{site.email}</a></div>}
  </div><div className="footer-bottom eyebrow"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.footerLine}</span><span>{site.provisionalLabel}</span></div></footer>;
}
