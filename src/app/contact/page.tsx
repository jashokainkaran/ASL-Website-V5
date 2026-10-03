import {pages} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';
import { PlaceholderPage } from '@/components/PlaceholderPage';
export const metadata = pageMetadata('Contact',pages.contact.description);
export default function Page() { return <PlaceholderPage page="contact"/>; }
