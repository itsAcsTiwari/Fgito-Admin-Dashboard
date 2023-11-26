'use client'

import { PageRoutes } from '@src/core'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
	const pathname = usePathname()
	return (
		<div className="flex flex-col mx-10 my-10">
			<div className="text-left uppercase  text-neutral-400 text-4xl ">
				<h3>HOME_CHEFS&apos; CONTROLS</h3>
			</div>
			<div className="flex flex-row mt-10 mb-2 uppercase font-medium text-xl">
				<div
					className={classNames(
						'px-5 py-2 mx-1 align-middle ',
						pathname.includes('/allHomechefs') ? 'bg-slate-300 rounded-3xl' : '',
					)}
				>
					<Link href={PageRoutes.All_HOME_CHEFS}>
						<h3>All HomeChefs</h3>
					</Link>
				</div>
				<div
					className={classNames(
						'px-5 py-2 mx-1 align-middle ',
						pathname.includes('/addHomechefs') ? 'bg-slate-300 rounded-3xl' : '',
					)}
				>
					<Link href={PageRoutes.ADD_HOME_CHEFS}>
						<h3>Add HomeChefs</h3>
					</Link>
				</div>
			</div>
			<hr className="h-px -mx-10 bg-neutral-400 border-0 dark:bg-neutral-400"></hr>
			<div>{children}</div>
		</div>
	)
}