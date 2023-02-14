import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Next() {
	return (
		<div>
			<h1 className="text-2xl">Next.js</h1>
			<ul>
				<li>Firebase</li>
				<li>Cloud Firestore</li>
				<li>Next.js</li>
				<li>Context</li>
				<li>Vercel</li>
			</ul>
			<ul className="flex items-center">
				<li>
					<a href="https://nextfire-app-hazel.vercel.app/" className="link-underline">View Site</a>
				</li>
				<li>
					<Link href="https://github.com/Ever-It-Lazy/nextfire-app" target="_blank">
						<SiGithub className="icon" />
					</Link>
				</li>
			</ul>
		</div>
	)
}