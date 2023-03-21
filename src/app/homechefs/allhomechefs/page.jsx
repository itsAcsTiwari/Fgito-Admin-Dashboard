"use client"
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
// export const metadata = {
// 	title: 'All Homechefs',
// 	description: 'To manage fgito data',
// }

const page = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
	fetch('/api/homechefs/allhomechefs').then(res =>
	  res.json()
	)
  )
  console.log("============",data?.data)
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message
	return (
		<>
			<div><h1>data</h1></div>
			{
				data?.data.map((data1,idx) => {
					return (
						<div key={idx}>
							<h3>{data1.Name}</h3>
						</div>
					)

				})
			}
			
		</>
	)
}

export default page