'use client'

import './globals.css'

import { Footer } from '@src/components'
import { Roboto } from 'next/font/google'
import { useEffect } from 'react'
import toast, { Toaster, useToasterStore } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '500', '700'],
})

const queryClient = new QueryClient()

const RootLayout = ({ children }) => {
	const { toasts } = useToasterStore();

	useEffect(() => {
		toasts
			.filter((t) => t.visible)
			.filter((_, i) => i >= 2)
			.forEach((t) => toast.dismiss(t.id));
	}, [toasts]);

	return (
		<html lang="en" className={roboto.className}>
			<body>
				<QueryClientProvider client={queryClient}>
					<Toaster />
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
