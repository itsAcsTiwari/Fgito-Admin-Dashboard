'use client'
import './globals.css'

import { Footer, SideBarNav } from '@src/components'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const metadata = {
	title: 'Admin web',
	description: 'To manage fgito data',
}

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400'],
})
const robotoCondensed = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['400'],
})
const queryClient = new QueryClient({})

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={roboto.className}>
			<body className="xl:max-w-screen-2xl mx-auto">
				{/* <Header /> */}
				<div className="h-screen flex flex-row justify-start">
					<SideBarNav />
					<QueryClientProvider client={queryClient}>
						<div className="bg-gray-200 flex-1 p-4 text-green-300">{children}</div>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</div>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
