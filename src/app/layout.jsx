'use client'

import './globals.css'

import { Footer } from '@src/components'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['700'],
})
const queryClient = new QueryClient({})

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={roboto.className}>
			<body>
				<QueryClientProvider client={queryClient}>
					<main className="mx-auto xl:max-w-screen-2xl">{children}</main>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
