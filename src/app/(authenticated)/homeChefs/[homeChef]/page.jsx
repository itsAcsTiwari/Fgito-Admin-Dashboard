'use client'

const Page = ({ params, searchParams }) => {
	console.dir('pageParam', params)
	const homeChefId = params.homeChef
	const homeChefSearchIs = searchParams?.id
	return (
		<>
			<div>{homeChefId}</div>
			<div>{homeChefSearchIs}</div>
		</>
	)
}

export default Page
