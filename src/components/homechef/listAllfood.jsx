'use client'

import { ErrorComponent, Loader } from '@src/components'
import { Select, TimePicker } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'

import RoundedInput from './roundedInput'

const ListAllFood = () => {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('/api/foods/allFoods').then((res) => res.json()),
	)

	const router = useRouter()
	const [selectedFood, setSelectedFood] = useState(null)

	const handleEdit = (foodId) => {
		router.push(`/editFood/${foodId}`)
	}

	if (isLoading) return <Loader />

	if (error) return <ErrorComponent error={error} />

	return (
		<>
			<ul>
				{data?.data.map((food) => (
					<li key={food.id}>
						{food.name}
						<button
							onClick={() => {
								setSelectedFood(food)
								handleEdit(food.id)
							}}
						>
							Edit
						</button>
					</li>
				))}
			</ul>
			{selectedFood && (
				<form>
					<h2>Edit Food</h2>
					<label>
						Food Name:
						<RoundedInput type="text" value={selectedFood.foodName} />
					</label>
					<label>
						Price:
						<RoundedInput type="number" min={0} value={selectedFood.price} />
					</label>
					<label>
						Quantity:
						<RoundedInput type="number" min={0} value={selectedFood.quantity} />
					</label>
					<label>
						Food Type:
						<Select
							value={selectedFood.foodType}
							options={[
								{ value: '0', label: Veg },
								{ value: '1', label: Non - Veg },
							]}
						/>
					</label>
					<label>
						Description:
						<RoundedInput value={selectedFood.description} />
					</label>
					<label>
						Food Image URL:
						<RoundedInput value={selectedFood.foodImg} />
					</label>
					<label>
						Food Preparation Time:
						<TimePicker format="h:mm a" value={selectedFood.foodPreparationTime} />
					</label>
					<button type="submit">Save</button>
				</form>
			)}
		</>
	)
}

export default ListAllFood
