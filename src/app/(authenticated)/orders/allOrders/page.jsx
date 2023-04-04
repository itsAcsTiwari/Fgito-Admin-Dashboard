'use client'

import { ErrorComponent, Loader } from '@src/components'
import OrdersTable from '@src/components/orders/ordersTable'
import { ApiRoutes } from '@src/core'
import { useQuery } from 'react-query'

const Page = () => {
	const { isLoading, error, data } = useQuery('repoData', () => fetch(ApiRoutes.allOrders).then((res) => res.json()))

	if (isLoading) return <Loader />
	if (error) return <ErrorComponent error={error} />

	return (
		<div>
			<h1>Orders</h1>
			<OrdersTable data={data} />
		</div>
	)
}

export default Page
