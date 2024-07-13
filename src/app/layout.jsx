'use client'

import './globals.css'

import Footer from '@src/components/common/Footer'
import Sidebar from '@src/components/common/Sidebar'
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
  const { toasts } = useToasterStore()

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= 2)
      .forEach((t) => toast.dismiss(t.id))
  }, [toasts])

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <main className="mx-auto xl:max-w-screen-2xl">
            <div className="flex w-full flex-row items-start justify-start">
              <div className="min-h-[100vh] w-[20%] bg-green-700">
                <Sidebar />
              </div>
              <div className="w-75% relative min-h-[100vh]">
                {children}
                <div className="absolute bottom-0 w-[100%]">
                  <Footer />
                </div>
              </div>
            </div>
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
