import {ASLMark} from './ASLMark';
export function ASLLogo({className=''}:{className?:string}) {
 return <span className={`asl-logo ${className}`}><ASLMark/><span>ASL</span></span>;
}
