import { GetLatestPostsQuery } from '@/graphql/generated';
import Link from 'next/link';


type PostListProps = {
	posts: GetLatestPostsQuery['posts']['edges'];
};

export default function PostList ({ posts }: PostListProps) {
	if (!posts.length) {
	  return <p>No posts available.</p>;
	}

	return (
	 <div className='home-post-list container mx-auto my-16'>
		<h2 className='text-3xl font-bold text-center mb-4'>Latest Posts</h2>
		<ul className='flex space-x-5'>
			{posts.map(({ node }) => (
			<li key={node.id} className='w-4/12'>
				<img src={node.featuredImage?.node.mediaItemUrl} alt={node.featuredImage?.node.altText} className='max-h-72 w-full' />
				<Link href={`/${node.slug}`} className='font-mono text-xl block mt-2'>{node.title}</Link>
				<div dangerouslySetInnerHTML={{ __html: node.excerpt }} className='text-base mt-4' />
				{/* <time dateTime={node.date} suppressHydrationWarning={true}>{new Date(node.date).toLocaleDateString()}</time> */}
			</li>
			))}
		</ul>
	  </div>
	);
  };