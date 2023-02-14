import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Mern() {
	return (
		<div>
			<h1 className="hdr1">MERN</h1>
			<div className="border-l-2 pl-6">
				<ul>
					<li>Express</li>
					<li>React-Bootstrap</li>
					<li>MongoDB</li>
					<li>Redux Toolkit</li>
					<li>Postman</li>
					<li>Cloudinary</li>
					<li>Heroku</li>
					<li>Material UI</li>
					<li>Vite</li>
					<li>Chance</li>
				</ul>
				<ul className="flex items-center">
					<li>
						<a href="https://mern-tutorial-2.herokuapp.com/" className="link-underline">View Site</a>
					</li>
					<li>
						<Link href="https://github.com/Ever-It-Lazy/Notezipper-rebuild" target="_blank">
							<SiGithub className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}