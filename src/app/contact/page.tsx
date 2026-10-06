import Link from 'next/link';
import {RouteEditorialMotion} from '@/components/RouteEditorialMotion';
import {contactCopy as copy} from '@/content/contact';
import {bookingUrl} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';
import {enquiryDeliveryConfigured} from '@/lib/contact-delivery';
import {ContactMatter} from '@/components/contact/ContactMatter';
import {ContactForm} from '@/components/contact/ContactForm';
import {SiteFooter} from '@/components/SiteFooter';
export const metadata = {...pageMetadata('Contact ASL | Start a Project', "Tell ASL what you're building and start a conversation about website design, development, deployment or digital product work."), title: {absolute: 'Contact ASL | Start a Project'}, alternates: {canonical: '/contact'}};
export const dynamic = 'force-dynamic';
export default function ContactPage() {
  return <><main id="main-content" tabIndex={-1} className="contact-page" data-environment="BURGUNDY_TEXTURED">
    <RouteEditorialMotion selector=".contact-page"/><ContactMatter/><div className="contact-intro"><div className="eyebrow">ASL / Start a project</div><h1><span className="editorial-mask"><span data-editorial-line>Tell us what</span></span><span className="editorial-mask"><span data-editorial-line>you&apos;re</span></span><span className="editorial-mask"><em data-editorial-line>building.</em></span></h1><p data-editorial-detail>{copy.introduction}</p>
      <div className="contact-conversation" data-editorial-detail><span className="eyebrow">Prefer a conversation?</span><Link className="text-link" href={bookingUrl === '/contact' ? '#enquiry' : bookingUrl}>Book a Call <span aria-hidden="true">↗</span></Link><p>Tell us about your project and include a request for a call in your enquiry.</p></div>
    </div><div className="contact-form-region" data-editorial-detail><ContactForm configured={enquiryDeliveryConfigured()}/></div>
  </main><SiteFooter/></>;
}
