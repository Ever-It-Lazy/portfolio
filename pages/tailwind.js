import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Tailwind({ show }) {
	return (
		<div className={show ? "slide-in" : "slide-out"}>
			<h1 className="hdr1">Tailwind CSS</h1>
			<div className="side-border">
				<p>
					Give credit where credit is due
					to <a href="https://dunks1980.com/" className="link-underline" target="_blank">Ian Dunkerley</a> for
					the inspiration. Refactoring his frontend into maintainable
					Tailwind CSS struck me as the more valuable demonstration
					of my typical contribution to a team's productivity.
					I <em>can</em> design, but full stack development is my jam.
				</p>
				<ul className="capsules">
					<li>Tailwind CSS</li>
					<li>Next.js</li>
					<li>Render</li>
				</ul>
				<ul className="flex items-center mt-4 space-x-1">
					<li>
						<Link href="https://github.com/Ever-It-Lazy/portfolio" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}