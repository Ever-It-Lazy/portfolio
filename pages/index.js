import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { ImFilePdf } from 'react-icons/im';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className="grid grid-cols-3">
			<nav className="col-span-3 flex">
				<a href="./home">Home</a>
				<div className="absolute flex right-0">
					<Link href="mailto:everettlindsay@gmail.com">
						<SiGmail className="icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/everett-l-59249691/" target="_blank">
						<SiLinkedin className="icon"/>
					</Link>
					<Link href="https://drive.google.com/file/d/1-66zH-VSrFpuf_KWtoh3Q5dPx-6HWn0C/view?usp=sharing" target="_blank">
						<ImFilePdf className="icon" />
					</Link>
				</div>
			</nav>
			<div className="col-span-2 m-10">
				<div>
					<h1>Welcome</h1>
					<p>
					My name is Everett Lindsay. I'm a full stack web developer.
					For the past 20 years I've used my Washington, DC location to
					mostly serve as a government contractor. But as positions
					have become increasingly remote, my interest has turned
					toward pure JavaScript stacks.
					</p>
					<p>
					Most of my contracting work is private, involving some level
					of clearance. But I forged a favorable reputation across the
					various teams I've participated in, and I'd eagerly pass on
					my references.
					</p>
					<p>
					Let these demonstrations serve as evidence of my toolkit.
					</p>
				</div>
			</div>
			<div className="col-span-1">
				<h2>Demonstrations</h2>
				<ul>
					<li>
						<a href="https://mern-tutorial-2.herokuapp.com/" className="link-underline">MERN</a>
					</li>
					<li>
						<a href="https://typescript-tutorial-1.web.app/" className="link-underline">TypeScript</a>
					</li>
					<li>
						<a href="https://nextfire-app-hazel.vercel.app/" className="link-underline">Next.JS</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
