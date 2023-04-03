'use client'

import AddHomeChefModal from '@src/app/homechefs/addhomechefs/page'
import { ErrorComponent, Loader } from '@src/components'
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

	if (isLoading) return <Loader />

	if (error) return <ErrorComponent error={error} />

	return (
		<div>
			<h1>Home Chefs</h1>
			<Button onClick={handleModalToggle}>Add Home Chef</Button>
			<AddHomeChefTable data={data} />
			<AddHomeChefModal visible={modalVisible} onCreate={mutate} onCancel={handleModalToggle} />
		</div>
	)
}

export default AllHomeChefs
