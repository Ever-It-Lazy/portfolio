import '@/styles/globals.css'
import { Numans } from '@next/font/google'

const font = Numans({
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
