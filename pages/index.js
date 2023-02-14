import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { RiHome2Fill } from 'react-icons/ri';
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
		<div className="xl:container xl:mx-auto mt-10">
			<div className="md:grid grid-cols-3">
				<div className="absolute bg-gradient-to-br from-gray-100 to-transparent h-60 w-60 rounded-lg -z-10 top-0">
					<div className="absolute bg-white h-60 w-60 rounded-lg -z-0 left-6 top-6"></div>
				</div>
				<nav className="col-span-3 relative">
					<div className="flex absolute right-0">
						<RiHome2Fill className="icon" onClick={toggleHome} />
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
				<div className="col-span-2 m-10 md:mx-32">
					{ showHome ? <Welcome /> : null }
					{ showMern ? <Mern /> : null }
					{ showTypeScript ? <TypeScript /> : null }
					{ showNext ? <Next /> : null }
				</div>
				<div className="col-span-1">
					<h2 className="hdr1">Demonstrations</h2>
					<ul className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-transparent">
						<li className="leading-9">
							<a onClick={toggleMern} className="link-underline">MERN</a>
						</li>
						<li className="leading-9">
							<a onClick={toggleTypeScript} className="link-underline">TypeScript</a>
						</li>
						<li className="leading-9">
							<a onClick={toggleNext} className="link-underline">Next.js</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
