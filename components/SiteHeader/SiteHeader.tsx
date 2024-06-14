import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
	headerLink?: ReactNode,
};

/**
 * Server-side data loading must take place in pages. If you need to load data
 * to render this component, you must pass it down as props (or load it client-
 * side.)
 */
export default function SiteHeader( props: Props ) {
	return (
		<div className='header-wrapper flex bg-cyan-700 py-2 px-2'>
			<div className='header-logo w-1/4'>
				<Link href="/">Home</Link>
					{props.headerLink && (
						<>
							{` > `}
							{props.headerLink}
						</>
					)}
			</div>
			<nav className='navigation-menu w-3/4 my-0'>
				<ul className='flex py-2 justify-end'>
				
				</ul>
			</nav>
		
		</div>
	);
}
