'use client'
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import AddHomeChefTable from '@src/components/homechef/allhomecheftable'
const queryClient = new QueryClient()
// export const metadata = {
// 	title: 'All Homechefs',
// 	description: 'To manage fgito data',
// }

const page = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/homechefs/allhomechefs').then((res) => res.json()),
	)
	console.log('============', data?.data)
	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message
	return (
		<>
			<div>
				<h1>Home Chef's</h1>
			</div>
			<AddHomeChefTable data={data} />
		</>
	)
}

export default page
