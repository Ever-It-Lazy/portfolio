import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Tailwind() {
	return (
		<div>
			<h1 className="hdr1">Tailwind CSS</h1>
			<div className="side-border">
				<p>
					This portfolio is overwhelmingly <a href="https://dunks1980.com/" className="link-underline" target="_blank">Ian Dunkerley's</a> work:
					give credit where credit is due. I took this opportunity to demonstrate some
					proficiency with Tailwind (clearly absent from Ian's markup) rather than
					sell myself as a designer.
				</p>
				<p>
					Next.js was used as framework, because based on my experience
					it's the easiest way to throw together a React web application.
				</p>
				<p>
					This is all static content, so I can host it from anywhere. I went with Firebase.
				</p>
				<ul>
					<li>Tailwind CSS</li>
					<li>Next.js</li>
					<li>Firebase</li>
				</ul>
				<ul className="flex items-center">
					<li>
						<Link href="https://github.com/Ever-It-Lazy/typescript-tutorial" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}