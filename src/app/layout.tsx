import {origin} from '@/lib/metadata';
import type { Metadata } from 'next';
import { Instrument_Sans, Geist_Mono } from 'next/font/google';
import { LinkMotion } from '@/components/LinkMotion';
import {ASLLoader} from '@/components/brand/ASLLoader';
import {RouteTransitionController} from '@/components/RouteTransitionController';
import { Header } from '@/components/Header';
import { ExperienceShell } from '@/components/ExperienceShell';
import '@/styles/globals.css';
const sans = Instrument_Sans({ subsets: ['latin'], weight:['400','500','600'], variable:'--font-instrument-sans' });
const mono = Geist_Mono({ subsets: ['latin'], variable:'--font-geist-mono' });
export const metadata: Metadata = {metadataBase:new URL(origin),openGraph:{title:"ASL — Digital matter, given form.",description:"ASL designs, develops and launches distinctive websites and digital products — combining design, engineering and technology into one considered experience.",type:"website"},title: {default:'ASL — Digital matter, given form.', template:'%s — ASL'}, description:'ASL designs, develops and launches distinctive websites and digital products — combining design, engineering and technology into one considered experience.', robots:{index:true,follow:true}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en" data-entry="pending" suppressHydrationWarning><body className={`${sans.variable} ${mono.variable}`}><style>{`html[data-entry="pending"] #site-interface{visibility:hidden;opacity:0;pointer-events:none}.asl-brand-loader{position:fixed;inset:0;z-index:50;background:var(--color-void,#050506)}.asl-brand-loader[hidden]{display:none}.entry-identity{visibility:hidden}`}</style><ASLLoader/><ExperienceShell/><RouteTransitionController/><div id="site-interface"><a className="skip-link" href="#main-content">Skip to content</a><Header/><LinkMotion/>{children}</div><noscript><style>{`#site-interface{opacity:1!important;visibility:visible!important;pointer-events:auto!important}.asl-brand-loader{display:none!important}.home-story,.skip-sequence{display:none!important}body:has(.home) .site-header{opacity:1!important;visibility:visible!important;pointer-events:auto!important}.hero-copy{opacity:1!important;visibility:visible!important}html[data-entry]{overflow:auto!important}`}</style></noscript></body></html>; }
