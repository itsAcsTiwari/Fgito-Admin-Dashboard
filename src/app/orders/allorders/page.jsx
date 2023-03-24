"use client"
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {Loader} from "@src/components"



const Page = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
	fetch('/api/orders/allorders').then(res =>
	  res.json()
	)
  )
  console.log("============",data?.data)
  if (isLoading) {
    return (
        <Loader />
    )}
 
  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
			<div><h1>OrderId</h1></div>
			{
				data?.data.map((data1,idx) => {
					return (
						<div key={idx}>
							<h3>{data1.orderNo}</h3>
						</div>
					)

				})
			}
			
		</>
  )
}

export default Page;