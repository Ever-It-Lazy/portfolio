import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Next({ show }) {
	return (
		<div className={show ? "slide-in" : "slide-out"}>
			<h1>Next.js</h1>
			<div className="side-border">
				<p>
					By the time I sought this tutorial, I had the sense that
					most React projects were the result of cobbling together a favored
					bunch of Node packages into makeshift frameworks.
				</p>
				<p>
					Well aware that my focus is full stack web development,
					I concentrated on finding the preexisting React framework
					that already does this the best. Why reinvent the wheel?
				</p>
				<ul className="capsules">
					<li>Firebase</li>
					<li>Cloud Firestore</li>
					<li>Next.js</li>
					<li>Context</li>
					<li>Vercel</li>
				</ul>
				<ul className="flex items-center mt-4 space-x-1">
					<li>
						<a href="https://nextfire-app-hazel.vercel.app/" className="link-underline text-sm md:text-lg" target="_blank">View Site</a>
					</li>
					<li>
						<Link href="https://github.com/Ever-It-Lazy/nextfire-app" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}