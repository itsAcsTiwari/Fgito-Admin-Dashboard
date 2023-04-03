'use client'
import classNames from 'classnames'
import { Roboto_Condensed } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const robotoCondensed = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['700'],
})

const RootNavigation = () => {
	const pathname = usePathname()
	const navigationWrapper = classNames('uppercase font-medium ml-3 my-1 pl-4 text-xl')
	const navigationActiveWrapper = classNames('uppercase font-medium ml-3 my-1 pl-4 text-xl text-[#009879]')
	return (
		<div className="flex flex-col">
			<div
				className={classNames(
					'flex flex-row text-left py-3 top-0 w-full',
					pathname.includes('/homeChefs') ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href="/homeChefs/allHomeChefs">
					<h2
						className={
							pathname.includes('/homeChefs')
								? `${navigationActiveWrapper} ${robotoCondensed.className}`
								: `${navigationWrapper} ${robotoCondensed.className}`
						}
					>
						homeChefs
					</h2>
				</Link>
			</div>
			<div
				className={classNames(
					'flex flex-row text-left py-3 top-0 w-full',
					pathname.includes('/orders') ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href="/orders/allOrders">
					<h2
						className={
							pathname.includes('/orders')
								? `${navigationActiveWrapper} ${robotoCondensed.className}`
								: `${navigationWrapper} ${robotoCondensed.className}`
						}
					>
						orders
					</h2>
				</Link>
			</div>
			<div
				className={classNames(
					'flex flex-row text-left py-3 top-0 w-full',
					pathname.includes('/sales') ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href="/sales">
					<h2
						className={
							pathname.includes('/sales')
								? `${navigationActiveWrapper} ${robotoCondensed.className}`
								: `${navigationWrapper} ${robotoCondensed.className}`
						}
					>
						Sales
					</h2>
				</Link>
			</div>
		</div>
	)
}

export default RootNavigation
