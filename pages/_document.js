import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Everett's portfolio</title>
			</Head>
			<body className="bg-slate-300 dark:bg-slate-800 overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
