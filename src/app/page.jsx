import { Header, SideBarNav } from '@src/components'

const Home = () => {
	return (
		<main className="overflow-hidden">
			<Header />
			<div className="mx-auto w-full flex min-h-[calc(100vh-130px)] flex-1 xl:px-4 xl:pt-4">
				<SideBarNav />
				<div aria-label="tables" className="bg-blue-300 flex flex-1 lg:divide-x">
					<div className="overflow-x-hidden overflow-y-auto">
						<h1 className="text-3xl font-bold underline">Hello world! this is the tailwind css here</h1>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
