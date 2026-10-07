import {Opening} from '@/components/Opening';
import {HomeSections} from '@/components/HomeSections';
import {HomeChoreography} from '@/components/HomeChoreography';
export const metadata={title:{absolute:'ASL — Websites & Digital Products'},description:'ASL designs, develops and launches distinctive websites and digital products, bringing design, engineering and technology into one considered experience.',openGraph:{title:'ASL — Websites & Digital Products',description:'ASL designs, develops and launches distinctive websites and digital products, bringing design, engineering and technology into one considered experience.',type:'website'}};
export default function Home(){return <main id="main-content" tabIndex={-1} className="home"><Opening/><HomeSections/><HomeChoreography/></main>;}
