import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function GraphQL({ show }) {
	return (
		<div className={show ? "slide-in" : "slide-out"}>
			<h1>GraphQL</h1>
			<div className="side-border">
				<p>
					This <a href="https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f" className="link-underline" target="_blank">4 year
						old tutorial</a> provides an extremely straightforward introduction to GraphQL.
					Given its age however, several parts of it were antiquated.
					The lack of React Hook usage stands out. Additionally, the Apollo API
					has evolved quite a bit. Overcoming these setbacks demonstrates
					that I'm not just copy &amp; pasting these demonstrations.
				</p>
				<p>
					But (for further proof, but mostly because I need to put in the practice), I
					also converted the final product to TypeScript.
				</p>
				<ul className="capsules">
					<li>GraphQL</li>
					<li>GraphiQL</li>
					<li>Apollo</li>
					<li>TypeScript</li>
				</ul>
				<ul className="flex items-center mt-4 space-x-1">
					<li>
						<a href="https://graphql-playlist.onrender.com/" className="link-underline text-sm md:text-lg" target="_blank">View Site</a>
					</li>
					<li>
						<Link href="https://github.com/Ever-It-Lazy/graphql-playlist" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}