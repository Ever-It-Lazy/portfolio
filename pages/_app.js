import '@/styles/globals.css'
import { Baskervville } from '@next/font/google'

const basker = Baskervville({
	weight: '400',
	subsets: ['latin']
})

export default function App({ Component, pageProps }) {
	return (
		<main className={basker.className}>
			<Component {...pageProps} />
		</main>
	);
}
