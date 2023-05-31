import { PageRoutes } from '@src/core'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import RootNavigation from './RootNavigation'

const SideBarNavigation = () => {
	return (
		<div className={classNames('bg-light sticky top-0 flex h-screen w-60 flex-col justify-between py-10 pb-4')}>
			<div>
				<Link href={PageRoutes.HOME}>
					<div className={classNames('mb-10 flex flex-row')}>
						<Image
							src="/fgitoLogo.png"
							alt="Picture of the author"
							className="object-cover"
							width={70}
							height={70}
						/>
						<h1 className="my-auto ml-3 flex text-lg font-bold">FGITO - Admin</h1>
					</div>
				</Link>
				<div>
					<RootNavigation />
				</div>
			</div>
			<div className={classNames('pl-4')}>Logout</div>
		</div>
	)
}

export default SideBarNavigation
