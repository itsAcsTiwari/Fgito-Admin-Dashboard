import './globals.css'

import { Footer } from '@src/components'
import { Inter } from 'next/font/google'

export const metadata = {
	title: 'Admin web',
	description: 'To manage fgito data',
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={inter.className}>
			<body className="xl:max-w-screen-2xl mx-auto">
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
