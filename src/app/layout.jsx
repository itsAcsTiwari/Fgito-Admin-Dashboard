import './globals.css'

import { Footer,Header, SideBarNav } from '@src/components'
import { Inter,Roboto,Roboto_Condensed } from 'next/font/google'

export const metadata = {
	title: 'Admin web',
	description: 'To manage fgito data',
}

const roboto = Roboto({ 
	subsets: ['latin'],
	weight: ['400'] 
})
const robotoCondensed = Roboto_Condensed({ 
	subsets: ['latin'],
	weight: ['400'] 
})

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={roboto.className}>
			<body className="xl:max-w-screen-2xl mx-auto">
				{/* <Header /> */}
				<div className="h-screen flex flex-row justify-start" >
					<SideBarNav/>
					<div className="bg-gray-200 flex-1 p-4 text-green-300">
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
