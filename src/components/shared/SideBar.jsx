import { RootNavigation } from '@src/components'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const SideBarNavigation = () => {
	return (
		<div className={classNames('h-screen sticky top-0 py-10 pb-4 bg-light flex justify-between flex-col w-60')}>
			<div>
				<Link href={'/'}>
					<div className={classNames('mb-10 flex flex-row')}>
						<Image
							src="/fgitoLogo.png"
							alt="Picture of the author"
							objectFit="cover"
							width={70}
							height={70}
						/>
						<h1 className="flex ml-3 my-auto text-lg font-bold">FGITO - Admin</h1>
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
