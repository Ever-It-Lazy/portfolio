import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { ImFilePdf } from 'react-icons/im';
import Link from 'next/link';
import Welcome from './welcome';
import Mern from './mern';
import { useState } from 'react';
import Next from './nextjs';
import TypeScript from './typescript';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [showHome, setShowHome] = useState(true);
	const [showMern, setShowMern] = useState(false);
	const [showTypeScript, setShowTypeScript] = useState(false);
	const [showNext, setShowNext] = useState(false);

	const toggleOff = () => {
		setShowHome(false);
		setShowMern(false);
		setShowTypeScript(false);
		setShowNext(false);
	}

	const toggleHome = () => {
		toggleOff();
		setShowHome(true);
	};

	const toggleMern = () => {
		toggleOff();
		setShowMern(true);
	};

	const toggleTypeScript = () => {
		toggleOff();
		setShowTypeScript(true);
	};

	const toggleNext = () => {
		toggleOff();
		setShowNext(true);
	};

	return (
		<div className="grid grid-cols-3">
			<nav className="col-span-3 flex">
				<a onClick={toggleHome}>Home</a>
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
				{ showHome ? <Welcome /> : null }
				{ showMern ? <Mern /> : null }
				{ showTypeScript ? <TypeScript /> : null }
				{ showNext ? <Next /> : null }
			</div>
			<div className="col-span-1">
				<h2 className="text-xl">Demonstrations</h2>
				<ul className="border-t-2 border-l-2 p-5">
					<li>
						<a onClick={toggleMern} className="link-underline">MERN</a>
					</li>
					<li>
						<a onClick={toggleTypeScript} className="link-underline">TypeScript</a>
					</li>
					<li>
						<a onClick={toggleNext} className="link-underline">Next.JS</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
