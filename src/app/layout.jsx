import './globals.css'

import { Footer,Header, SideBarNav } from '@src/components'
import { Inter,Roboto,Roboto_Condensed } from 'next/font/google'

export const metadata = {
	title: 'Admin web',
	description: 'To manage fgito data',
}

const roboto = Roboto({ 
	subsets: ['latin'],
	weight: ['700'] 
})


const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={roboto.className}>
			<body className="xl:max-w-screen-2xl mx-auto">
				{/* <Header /> */}
				<div className="flex flex-row justify-start" >
					<SideBarNav/>
					<div className="bg-gray-200 flex-1 p-4 text-black-300">
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
