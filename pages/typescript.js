import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function TypeScript() {
	return (
		<div>
			<h1 className="text-2xl">TypeScript</h1>
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
			<ul>
				<li><a href="https://typescript-tutorial-1.web.app/" className="link-underline">View Site</a></li>
				<li>
					<Link href="https://github.com/Ever-It-Lazy/Notezipper-rebuild" target="_blank">
						<SiGithub className="icon" />
					</Link>
				</li>
			</ul>
		</div>
	)
}