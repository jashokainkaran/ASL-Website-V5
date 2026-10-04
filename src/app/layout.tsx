import {origin} from '@/lib/metadata';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { LinkMotion } from '@/components/LinkMotion';
import {ASLLoader} from '@/components/brand/ASLLoader';
import { Header } from '@/components/Header';
import { ExperienceShell } from '@/components/ExperienceShell';
import '@/styles/globals.css';
const sans = Geist({ subsets: ['latin'], variable:'--font-geist' });
const mono = Geist_Mono({ subsets: ['latin'], variable:'--font-geist-mono' });
const display = Instrument_Serif({ subsets: ['latin'], weight:'400', style:['normal','italic'], variable:'--font-instrument' });
export const metadata: Metadata = {metadataBase:new URL(origin),openGraph:{title:"ASL — Digital matter, given form.",description:"Websites and digital products, considered from idea to release.",type:"website"},title: {default:'ASL — Digital matter, given form.', template:'%s — ASL'}, description:'ASL designs, builds and deploys websites and digital products.', robots:{index:true,follow:true}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en" data-entry="pending" suppressHydrationWarning><body className={`${sans.variable} ${mono.variable} ${display.variable}`}><ASLLoader/><ExperienceShell/><div id="site-interface"><a className="skip-link" href="#main-content">Skip to content</a><Header/><LinkMotion/>{children}</div><noscript><style>{`#site-interface{opacity:1!important;visibility:visible!important}.asl-brand-loader{display:none!important}.hero-copy{opacity:1!important;visibility:visible!important}html[data-entry]{overflow:auto!important}`}</style></noscript></body></html>; }
