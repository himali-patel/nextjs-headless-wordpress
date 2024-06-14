import useInternalLinkRouting from '@/lib/hooks/useInternalLinkRouting';
// import '@/styles/new.css';
import '@/styles/index.scss';

export default function App( { Component, pageProps } ) {
	useInternalLinkRouting();

	return <Component {...pageProps} />;
}
