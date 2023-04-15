import { Button, Col, Form, Input, Row, Select, TimePicker } from 'antd'
import moment from 'moment'
import { useMutation } from 'react-query'

import RoundedInput from './roundedInput'

const { Option } = Select

const AddHomeChef = () => {
	const [form] = Form.useForm()

	const initialValues = {
		foodName: '',
		foodImg: '',
		foodDescription: '',
		quantity: '0',
		foodType: '0',
		price: '0',
		foodPreparationTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
	}

	const { mutate, isLoading } = useMutation(
		async (food) => {
			const response = await fetch('/api/foods/addFoods', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(food),
			})
			const data = await response.json()
			return data
		},
		{
			onSuccess: async () => {
				await queryCache.refetchQueries('food')
				setModalVisible(false)
			},
		},
	)

	const handleCreate = async () => {
		try {
			const values = await form.validateFields()
			mutate(values)
			form.resetFields()
		} catch (err) {
			console.error('Error: ', err)
		}
	}

	return (
		<div className="w-full rounded py-2 bg-cover bg-center">
			<Form
				form={form}
				initialValues={initialValues}
				onFinish={handleCreate}
				className="bg-white p-6 rounded-lg shadow-md"
			>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="foodName" rules={[{ required: true, message: 'Please input food name' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>FoodName:
							</div>
							<RoundedInput />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="foodImg" rules={[{ required: true, message: 'Please input the image URL' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Food Image URL:
							</div>
							<RoundedInput />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Form.Item
						name="foodPreparationTime"
						rules={[{ required: true, message: 'Please select foodPreparationTime' }]}
					>
						<div className="text-gray-600 mb-1">
							<sup>*</sup>Food Preparation Time:
						</div>
						<TimePicker format="h:mm a" />
					</Form.Item>
					<Col xs={24} sm={12}>
						<Form.Item name="description">
							<div className="text-gray-600 mb-1">Description:</div>
							<RoundedInput />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="quantity" rules={[{ required: true, message: 'Please enter quantity' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Quantity:
							</div>

							<RoundedInput min={0} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="foodType" rules={[{ required: true, message: 'Please select food type' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Food Type:
							</div>
							<Select
								defaultValue={initialValues.foodType}
								onChange={(value) => form.setFieldsValue({ foodType: value })}
							>
								<Option value="0">Veg</Option>
								<Option value="1">Non-Veg</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="price" rules={[{ required: true, message: 'Please enter price' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Price:
							</div>
							<RoundedInput min={0} />
						</Form.Item>
					</Col>
				</Row>
				<div className="flex justify-center mt-8">
					<Button className="bg-white text-black" htmlType="submit" disabled={isLoading}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}
export default AddHomeChef
