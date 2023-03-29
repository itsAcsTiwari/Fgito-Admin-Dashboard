'use client'
import { ErrorComponent, Loader } from '@src/components'
import OrdersTable from '@src/components/Orders/ordersTable'
import { useQuery } from 'react-query'

const Page = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/orders/allorders').then((res) => res.json()),
	)

	if (isLoading) return <Loader />
	if (error) return <ErrorComponent error={error} />

	return (
		<div>
			<h1>Order</h1>
			<OrdersTable data={data} />
		</div>
	)
}

export default Page
