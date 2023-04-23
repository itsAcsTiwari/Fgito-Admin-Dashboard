import { ErrorComponent, Loader } from '@src/components'
import { Select, TimePicker } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useQuery } from 'react-query'

import RoundedInput from './roundedInput'

const useHandleEdit = () => {
  const router = useRouter()

  const handleEdit = (foodId) => {
    router.push(`/editFood/${foodId}`)
  }

  return handleEdit
}

const ListAllFood = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/foods/allFoods').then((res) => res.json()),
  )

  const [selectedFood, setSelectedFood] = useState(null)
  const handleEdit = useHandleEdit()

  const handleFoodSelect = (food) => {
    setSelectedFood(food)
    handleEdit(food.id)
  }

  if (isLoading) return <Loader />

  if (error) return <ErrorComponent error={error} />

  return (
    <>
      <ul>
        {data?.data.map((food) => (
          <li key={food.id}>
            {food.name}
            <button onClick={() => handleFoodSelect(food)}>Edit</button>
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
              value={selectedFood ? selectedFood.foodType : '0'}
              options={[
                { label: 'Veg', value: '0' },
                { label: 'Non-Veg', value: '1' },
              ]}
            ></Select>
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
