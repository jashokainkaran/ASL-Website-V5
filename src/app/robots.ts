import type {MetadataRoute} from 'next';
import {origin} from '@/lib/metadata';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:'/lab/'},sitemap:new URL('/sitemap.xml',origin).href};}
