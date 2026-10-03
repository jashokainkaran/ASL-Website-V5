import type {Metadata} from 'next';
export const origin=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export function pageMetadata(title:string,description:string):Metadata{return {title,description,openGraph:{title:`${title} — ASL`,description,type:'website'}};}
