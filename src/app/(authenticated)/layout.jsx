'use client'

import { SideBarNav } from '@src/components'

const Layout = ({ children }) => {
	return (
		<div className="flex flex-row justify-start">
			<SideBarNav />
			<div className="bg-gray-200 flex-1 p-4 text-black overflow-x-hidden">{children}</div>
		</div>
	)
}

export default Layout
