'use client'

import './globals.css'

import { Footer, SideBarNav } from '@src/components'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const metadata = {
	title: 'Admin web',
	description: 'To manage fgito data',
}

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['700'],
})
const queryClient = new QueryClient({})

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={roboto.className}>
			<body className="xl:max-w-screen-2xl mx-auto">
				{/* <Header /> */}
				<div className="flex flex-row justify-start">
					<SideBarNav />
					<QueryClientProvider client={queryClient}>
						<div className="bg-gray-200 flex-1 p-4 text-black">{children}</div>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</div>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
