import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function GoogleMaps({ show }) {
	return (
		<div className={show ? "slide-in" : "slide-out"}>
			<h1>Google Maps</h1>
			<div className="side-border">
				<p>
					Completing <a href="https://www.youtube.com/watch?v=2po9_CIRW7I&t=2s" className="link-underline" target="_blank">this crash
					course</a> allowed me to gain a fundamental understanding of how to
					use the Google Maps API with React.
				</p>
				<p>
					Search any address to set as your office starting point. From there, the app radiates
					3 commute zones and generates several potential (fake) locations where you could choose to live.
					Selecting any one of these pinned locations computes details about your commute, to help
					you determine where you'd like to move.
				</p>
				<p>
					Beyond just getting a map onscreen, this tutorial introduced me to map detail configuration,
					interactive	directions, and clustering locations.
				</p>
				<ul className="capsules">
					<li>Google Maps Platform</li>
					<li>Next.js</li>
					<li>Yarn</li>
					<li>TypeScript</li>
					<li>Render</li>
				</ul>
				<ul className="flex items-center mt-4 space-x-1">
					<li>
						<a href="https://google-maps-react-crash-course.onrender.com/" className="link-underline text-sm md:text-lg" target="_blank">View Site</a>
					</li>
					<li>
						<Link href="https://github.com/Ever-It-Lazy/google-maps-react-crash-course" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}