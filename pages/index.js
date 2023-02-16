import { SiGmail, SiLinkedin } from 'react-icons/si';
import { RiHome2Fill } from 'react-icons/ri';
import { ImFilePdf } from 'react-icons/im';
import { HiOutlineMoon, HiSun } from 'react-icons/hi';
import Link from 'next/link';
import Welcome from './welcome';
import Mern from './mern';
import { useState } from 'react';
import Next from './nextjs';
import TypeScript from './typescript';
import Tailwind from './tailwind';

export default function Home() {
	const [showHome, setShowHome] = useState(true);
	const [showMern, setShowMern] = useState(false);
	const [showTypeScript, setShowTypeScript] = useState(false);
	const [showNext, setShowNext] = useState(false);
	const [showTailwind, setShowTailwind] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleOff = () => {
		setShowHome(false);
		setShowMern(false);
		setShowTypeScript(false);
		setShowNext(false);
		setShowTailwind(false);
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

	const toggleTailwind = () => {
		toggleOff();
		setShowTailwind(true);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);

		const theme = darkMode ? "dark" : "light";

		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.theme = theme;

		// Whenever the user explicitly chooses to respect the OS preference
		//localStorage.removeItem('theme')
	};

	return (
		<div className="xl:container xl:mx-auto">
			<div className="relative md:grid grid-cols-3 min-h-screen max-h-full">
				{/* top left border */}
				<div className="absolute bg-gradient-to-br from-slate-400 via-slate-300 dark:via-slate-800 h-60 w-60 rounded-lg -z-10">
					<div className="absolute bg-slate-300 dark:bg-slate-800 h-60 w-60 rounded-lg z-0 left-5 top-5"></div>
				</div>

				<nav className="relative col-span-3">
					<div className="flex absolute right-0 m-5">
						<RiHome2Fill className="icon" onClick={toggleHome} />
						{
							darkMode
								? <HiSun className="icon" onClick={toggleDarkMode} />
								: <HiOutlineMoon className="icon" onClick={toggleDarkMode} />
						}
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

				<div className="col-span-2 p-10 md:m-10 md:p-0 md:mx-32 h-auto sm:h-[28rem]">
					{ showHome ? <Welcome /> : null }
					{ showMern ? <Mern /> : null }
					{ showTypeScript ? <TypeScript /> : null }
					{ showNext ? <Next /> : null }
					{ showTailwind ? <Tailwind /> : null }
				</div>

				<div className="col-span-1 ml-10 md:ml-0">
					<h2 className="text-2xl sm:text-3xl">Demonstrations</h2>
					<ul className="relative p-6 rounded-xl bg-gradient-to-br from-slate-400 via-slate-300 dark:via-slate-800">
						<li className="leading-9">
							<div className="absolute bg-slate-300 dark:bg-slate-800 h-full w-full rounded-xl z-0 left-0.5 top-0.5"></div>
							<a onClick={toggleMern} className="link-underline">MERN</a>
						</li>
						<li className="leading-9">
							<a onClick={toggleTypeScript} className="link-underline">TypeScript</a>
						</li>
						<li className="leading-9">
							<a onClick={toggleNext} className="link-underline">Next.js</a>
						</li>
						<li className="leading-9">
							<a onClick={toggleTailwind} className="link-underline">Tailwind CSS</a>
						</li>
					</ul>
				</div>

				{/* bottom right border */}
				<div className="absolute bg-gradient-to-br from-transparent via-slate-300 to-slate-400 dark:via-slate-800 dark:to-slate-400 h-60 w-60 rounded-lg z-10 bottom-0 right-0">
					<div className="absolute bg-slate-300 dark:bg-slate-800 h-60 w-60 rounded-lg z-0 right-5 bottom-5"></div>
				</div>
			</div>
		</div>
	)
}
