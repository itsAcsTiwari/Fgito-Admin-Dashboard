// "use client"
// import React from 'react'
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// import {Loader} from "@src/components"

// const Page = () => {
//     const { isLoading, error, data } = useQuery('repoData', () =>
// 	fetch('/api/orders/allorders').then(res =>
// 	  res.json()
// 	)
//   )
//   	if (isLoading) return<Loader />
// 	if (error) return <ErrorComponent error={error} />
//   return (
//     <>
// 			<div><h1>OrderId</h1></div>
// 			{
// 				data?.data.map((data1,idx) => {
// 					return (
// 						<div key={idx}>
// 							<h3>{data1.orderNo}</h3>
// 						</div>
// 					)

// 				})
// 			}

// 		</>
//   )
// }

// export default Page;

'use client'
import { ErrorComponent, Loader } from '@src/components'
import OrdersTable from '@src/components/orders/ordersTable'
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
