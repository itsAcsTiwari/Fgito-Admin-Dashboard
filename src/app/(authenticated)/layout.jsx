'use client'

import { Footer, SideBarNav } from '@src/components'

const Layout = ({ children }) => {
	return (
		<main className="flex flex-row justify-start">
			<SideBarNav />
			<div className="bg-gray-200 flex-1 p-4 text-black overflow-x-hidden">{children}</div>
		</main>
	)
}

export default Layout
