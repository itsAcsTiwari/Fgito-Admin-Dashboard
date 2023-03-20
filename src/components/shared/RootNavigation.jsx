import Link from 'next/link';
import classNames from "classnames"
const RootNavigation = () => {
    const navigationWrapper = classNames("uppercase font-medium ml-3 ")
	return (
        <div className="flex flex-col">
            <div className="flex flex-row text-left top-0 w-full">
                <Link href="/homechefs">
                    <h2 className={navigationWrapper} >homechefs</h2>
                </Link>
            </div>
            <div className="flex flex-row text-left top-0 w-full">
                <Link href="/orders">
                    <h2 className={navigationWrapper} >orders</h2>
                </Link>
            </div>
        </div>
    )
}

export default RootNavigation
