import classNames from "classnames";
import Image from "next/image";
import {RootNavigation} from "@src/components";
import Link from 'next/link';

const SideBarNavigation = () => {
	const wrapperClass = classNames("h-screen px-4 py-10 pb-4 bg-light flex justify-between flex-col w-1/5")
	const logoClass = classNames("mt-5 mb-10 flex flex-row")
	return (
		<div className={wrapperClass}>
			<div>
				<Link href={"/"}>
					<div className={logoClass}>
						<Image
							src="/fgitoLogo.png"
							alt="Picture of the author"
							objectFit="cover"
							width={70}
							height={70}
							/>
						<h1 className="flex ml-3 my-auto font-bold align-middle">FGITO - Admin</h1>
					</div>
				</Link>
				<div>
					<RootNavigation/>
				</div>
			</div>
			<div>
				Logout
			</div>
		</div>
	)
}

export default SideBarNavigation
