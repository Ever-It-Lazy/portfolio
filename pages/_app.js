import '@/styles/globals.css'
import { Raleway } from '@next/font/google'

const font = Raleway({
	weight: '400',
	subsets: ['latin'],
	variable: '--font',
})

export default function App({ Component, pageProps }) {
	return (
		<main className={`${font.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
