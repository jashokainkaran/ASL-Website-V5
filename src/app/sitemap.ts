import type {MetadataRoute} from 'next';
import {origin} from '@/lib/metadata';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/capabilities','/work','/about','/contact'].map(path=>({url:new URL(path,origin).href}));}
