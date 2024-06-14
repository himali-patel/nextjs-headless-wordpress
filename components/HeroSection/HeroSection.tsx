import Link from 'next/link';

/**
 * Server-side data loading must take place in pages. If you need to load data
 * to render this component, you must pass it down as props (or load it client-
 * side.)
 */
export default function HeroSection() {
	return (
		<div className='hero-section min-h-svh bg-cyan-50'>
		
			<div className='container mx-auto text-center py-36'>
				<h1 className='text-5xl font-bold max-w-5xl pt-8 pb-8 mx-auto w-full'>Headless Wordpress + Next.js Learning Demo Site</h1>
				<p className='text-lg'>This decoupled WordPress site is built with WordPress VIP’s <a href="https://github.com/Automattic/vip-go-nextjs-skeleton">Next.js boilerplate</a> and <a href="https://github.com/Automattic/vip-decoupled-bundle">decoupled plugin bundle</a>.</p>
			</div>
		</div>
	);
}

