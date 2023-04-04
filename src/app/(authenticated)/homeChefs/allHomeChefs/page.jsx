'use client'

import { AddHomeChefTable, ErrorComponent, Loader } from '@src/components'
import { ApiRoutes } from '@src/core'
import { useQuery } from 'react-query'

const AllHomeChefs = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch(ApiRoutes.allHomechefs).then((res) => res.json()),
	)
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
