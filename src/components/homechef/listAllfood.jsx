'use client'

import { ErrorComponent, Loader } from '@src/components'
import { useQuery } from 'react-query'

const ListAllFood = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/foods/allFoods').then((res) => res.json()),
	)

	if (isLoading) return <Loader />

	if (error) return <ErrorComponent error={error} />
	return (
		<ul>
			{data?.data.map((food) => (
				<li key={food.id}>{food.name}</li>
			))}
		</ul>
	)
}
export default ListAllFood
