'use client'

import AddHomeChefModal from '@src/app/homechefs/addhomechefs/page'
import { ErrorComponent, Loader } from '@src/components'
<<<<<<< HEAD:src/app/homechefs/allhomechefs/page.jsx
import AddHomeChefTable from '@src/components/homechef/allhomecheftable'
import { Button } from 'antd'
import { useState } from 'react'
import { queryCache, useMutation, useQuery } from 'react-query'

const AllHomeChefs = () => {
	const { isLoading, error, data } = useQuery('homeChefs', () =>
		fetch('/api/homechefs/allhomechefs').then((res) => res.json()),
	)

	const [modalVisible, setModalVisible] = useState(false)

	const { mutate } = useMutation(
		async (homeChef) => {
			const response = await fetch('/api/homechefs/addHomeChefs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(homeChef),
			})
			const data = await response.json()
			return data
		},
		{
			onSuccess: async () => {
				await queryCache.refetchQueries('homeChefs')
				setModalVisible(false)
			},
		},
	)

	const handleModalToggle = () => {
		setModalVisible((prevState) => !prevState)
	}

=======
import AddHomeChefTable from '@src/components/homeChef/allHomeChefTable'
import { useQuery } from 'react-query'

const AllHomeChefs = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/homeChefs/allHomeChefs').then((res) => res.json()),
	)

>>>>>>> 797db55b1e3dfdb04aef6584101e322d76b87281:src/app/(authenticated)/homeChefs/allHomeChefs/page.jsx
	if (isLoading) return <Loader />

	if (error) return <ErrorComponent error={error} />

	return (
		<div>
<<<<<<< HEAD:src/app/homechefs/allhomechefs/page.jsx
			<h1>Home Chefs</h1>
			<Button onClick={handleModalToggle}>Add Home Chef</Button>
=======
			<h1>Home Chef&apos;s</h1>
>>>>>>> 797db55b1e3dfdb04aef6584101e322d76b87281:src/app/(authenticated)/homeChefs/allHomeChefs/page.jsx
			<AddHomeChefTable data={data} />
			<AddHomeChefModal visible={modalVisible} onCreate={mutate} onCancel={handleModalToggle} />
		</div>
	)
}

export default AllHomeChefs
