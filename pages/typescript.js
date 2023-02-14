import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function TypeScript() {
	return (
		<div>
			<h1 className="text-2xl">TypeScript</h1>
			<ul>
				<li>TypeScript</li>
				<li>html-react-parser</li>
				<li>react-beautiful-dnd</li>
			</ul>
			<ul className="flex items-center">
				<li>
					<a href="https://typescript-tutorial-1.web.app/" className="link-underline">View Site</a>
				</li>
				<li>
					<Link href="https://github.com/Ever-It-Lazy/typescript-tutorial" target="_blank">
						<SiGithub className="icon" />
					</Link>
				</li>
			</ul>
		</div>
	)
}