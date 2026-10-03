import { pages } from '@/content/site';
export function PlaceholderPage({page}: {page: string}) { const data = pages[page]; return <main id="main-content" className="placeholder-page"><div className="eyebrow">ASL / {page}</div><h1>{data.title}</h1><p>{data.description}</p></main>; }
