import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function Mern() {
	return (
		<div>
			<h1>MERN</h1>
			<div className="side-border">
				<p>
					(Use my email address to log in. The password is "password.")
				</p>
				<p>
					I chose MERN because it's a full JavaScript stack. I suspect
					using the same language on both the frontend and the backend will
					be easier in the long term than a continued investment in
					mastering separate client and server side technologies.
				</p>
				<p>
					Of all the fullstack options, MERN appealed to me, because React
					is the most popular JavaScript library, bar none.
				</p>
				<ul className="inline-block">
					<li className="inline-block">Express</li>
					<li className="inline-block">React-Bootstrap</li>
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