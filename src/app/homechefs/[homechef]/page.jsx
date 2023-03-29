import React from 'react'

const Page = ({ params, searchParams }) => {
	console.log('pageParam', params)
	const homechefId = params.homechef
	const homechefSerchIs = searchParams?.id
	return (
		<>
			<div>{homechefId}</div>
			<div>{homechefSerchIs}</div>
		</>
	)
}

export default Page
