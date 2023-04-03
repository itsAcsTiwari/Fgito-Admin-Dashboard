'use client'

import { ErrorComponent,Loader,AddHomeChefTable } from '@src/components'
import { useQuery } from 'react-query'

const AllHomeChefs = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/homechefs/allhomechefs').then((res) => res.json()),
	)
	console.dir('============', data?.data)
	if (isLoading) return <Loader />

	if (error) return <ErrorComponent error={error} />

	return (
		<div>
			<h1>Home Chef&apos;s</h1>
			<AddHomeChefTable data={data} />
		</div>
	)
}
export default AllHomeChefs
