'use client'

import './globals.css'

import { Footer } from '@src/components'
import { Roboto } from 'next/font/google'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '500', '700'],
})

const RootLayout = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<html lang="en" className={roboto.className}>
			<body>
				<QueryClientProvider client={queryClient}>
					<main className="mx-auto xl:max-w-screen-2xl">
						{children}
					</main>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
