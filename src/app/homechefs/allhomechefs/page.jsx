'use client'

import { ErrorComponent, Loader } from '@src/components'
import AddHomeChefTable from '@src/components/homechef/allhomecheftable'
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
			<h1>Home Chefs</h1>
			<AddHomeChefTable data={data} />
		</div>
	)
}
export default AllHomeChefs
