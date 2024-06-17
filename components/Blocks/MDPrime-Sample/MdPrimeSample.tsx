import { BlockProps } from '../index';

export default function MDPrimeSample ( { block: { innerHTML } }: BlockProps ) {
	return <p dangerouslySetInnerHTML={ { __html: innerHTML } } />;
}
