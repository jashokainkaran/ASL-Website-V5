import type {MetadataRoute} from 'next';
import {origin} from '@/lib/metadata';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/capabilities','/projects','/about','/contact'].map(path=>({url:new URL(path,origin).href}));}
