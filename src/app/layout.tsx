import {origin} from '@/lib/metadata';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { LinkMotion } from '@/components/LinkMotion';
import { Header } from '@/components/Header';
import { ExperienceShell } from '@/components/ExperienceShell';
import '@/styles/globals.css';
const sans = Geist({ subsets: ['latin'], variable:'--font-geist' });
const mono = Geist_Mono({ subsets: ['latin'], variable:'--font-geist-mono' });
const display = Instrument_Serif({ subsets: ['latin'], weight:'400', style:['normal','italic'], variable:'--font-instrument' });
export const metadata: Metadata = {metadataBase:new URL(origin),openGraph:{title:"ASL — Digital matter, given form.",description:"Websites and digital products, considered from idea to release.",type:"website"},title: {default:'ASL — Digital matter, given form.', template:'%s — ASL'}, description:'ASL designs, builds and deploys websites and digital products.', robots:{index:true,follow:true}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en"><body className={`${sans.variable} ${mono.variable} ${display.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><ExperienceShell/><Header/><LinkMotion/>{children}</body></html>; }
