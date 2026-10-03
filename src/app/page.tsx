import {Opening} from '@/components/Opening';
import {HomeSections} from '@/components/HomeSections';
import {HomeChoreography} from '@/components/HomeChoreography';
import {site} from '@/content/site';
export const metadata={title:{absolute:'ASL — Digital matter, given form.'},description:site.description,openGraph:{title:'ASL — Digital matter, given form.',description:site.description,type:'website'}};
export default function Home(){return <main id="main-content" className="home"><Opening/><HomeSections/><HomeChoreography/></main>;}
