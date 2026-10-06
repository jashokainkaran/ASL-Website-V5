import {pages} from '@/content/site';
import {capabilities} from '@/content/capabilities';
import {pageMetadata} from '@/lib/metadata';
export const metadata = pageMetadata('Capabilities',pages.capabilities.description);
export default function Page() { return <main id="main-content" tabIndex={-1} className="placeholder-page"><div className="eyebrow">ASL / Capabilities</div><h1>{pages.capabilities.title}</h1><p>{pages.capabilities.description}</p><div className="capability-details">{capabilities.map(cap=><section className="capability-detail" id={cap.formation} key={cap.formation}><h2>{cap.name}</h2><p>{cap.description}</p></section>)}</div></main>; }
