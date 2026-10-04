import {notFound} from 'next/navigation';
export const metadata={title:'Work unavailable',robots:{index:false,follow:false}};
// Publish an explicit slug registry only when genuine case studies are supplied.
export default function Page(){notFound();}
