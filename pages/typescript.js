import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function TypeScript({ show }) {
	return (
		<div className={show ? "slide-in" : "slide-out"}>
			<h1>TypeScript</h1>
			<div className="side-border">
				<p>
					TypeScript is also an extremely popular package.
					Purportedly, it "saves time" by eliminating errors that originate
					from JavaScript's lack of native type enforcement?
				</p>
				<p>
					Having spent my entire career using duck-typed, interpreted languages...on
					a project like this, I lost quite a chunk of time in compilation errors, struggling
					to manually type everything.
				</p>
				<p>
					(I suppose it all comes down to whether the time spent
					writing TypeScript &lt; the time spent fixing the particular class of bugs
					that it eliminates?)
				</p>
				<ul className="capsules">
					<li>TypeScript</li>
					<li>html-react-parser</li>
					<li>react-beautiful-dnd</li>
				</ul>
				<ul className="flex items-center mt-4 space-x-1">
					<li>
						<a href="https://typescript-tutorial-1.web.app/" className="link-underline text-sm md:text-lg" target="_blank">View Site</a>
					</li>
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