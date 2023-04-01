'use client'

import { ErrorComponent, Loader } from '@src/components'
import AddHomeChefTable from '@src/components/homeChef/allhomecheftable'
import { useQuery } from 'react-query'

const AllHomeChefs = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/homeChefs/allHomeChefs').then((res) => res.json()),
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
