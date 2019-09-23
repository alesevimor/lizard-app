import Layout from '../components/layout';
import Link from 'next/link';

import React, { Component } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function getPosts() {
	return [
		{ id: 'hello-nextjs', title: 'Hello Next.js' },
		{ id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
		{ id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
	];
}

const Page = () => (
	<Layout>
		<h1>My Blog</h1>
    <Button label="Save" />
		<ul>
			{getPosts().map(post => (
				<li key={post.id}>
					<Link href="/p/[id]" as={`/p/${post.id}`}>
						<a>{post.title}</a>
					</Link>
				</li>
			))}
		</ul>
		<style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
	</Layout>
);
export default Page;