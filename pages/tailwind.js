import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Tailwind() {
	return (
		<div>
			<h1 className="hdr1">Tailwind CSS</h1>
			<div className="side-border">
				<p>
					This portfolio is overwhelmingly <a href="https://dunks1980.com/" className="link-underline" target="_blank">Ian Dunkerley</a>'s
					design: give credit where credit is due. Refactoring his frontend into maintainable
					Tailwind CSS struck me as a far more valuable demonstration than selling my
					merits as a frontend designer.
				</p>
				<ul className="capsules">
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