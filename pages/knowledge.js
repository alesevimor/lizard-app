// pages/knowledge.js
import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Page = props => (
	<Layout>
		<h1>Knowledge</h1>
		<ul>
			{props.shows.map(show => (
				<li key={show.id}>
					<Link href="/batman/[id]" as={`/batman/${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Page.getInitialProps = async () => {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data.map(entry => entry.show)
	};
};

export default Page;