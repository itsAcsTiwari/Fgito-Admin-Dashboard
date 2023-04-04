'use client'
import { HOMECHEFS, ORDERS, PageRoutes } from '@src/core'
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
					pathname.includes(HOMECHEFS) ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href={PageRoutes.All_HOME_CHEFS}>
					<h2
						className={
							pathname.includes(HOMECHEFS)
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
					pathname.includes(ORDERS) ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href={PageRoutes.ALL_ORDERS}>
					<h2
						className={
							pathname.includes(ORDERS)
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
					pathname.includes(PageRoutes.SALES) ? 'bg-slate-300 border-r-4 border-[#009879]' : '',
				)}
			>
				<Link href={PageRoutes.SALES}>
					<h2
						className={
							pathname.includes(PageRoutes.SALES)
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
