import type {ReactNode} from 'react';
/** Phrase boundaries are authored, preserving natural DOM reading order. */
export function Phrase({children,className=''}:{children:ReactNode;className?:string}) {
 return <span className={`phrase-mask ${className}`}><span data-reveal="phrase">{children}</span>{' '}</span>;
}
export function Rule({className=''}:{className?:string}) {
 return <span className={`editorial-rule ${className}`} aria-hidden="true"><i data-reveal="rule"/></span>;
}
