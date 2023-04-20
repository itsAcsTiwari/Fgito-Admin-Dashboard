'use client'

import { ApiRoutes } from '@src/core'
import { Button, Col, Form, Input, Row, Select, TimePicker } from 'antd'
import moment from 'moment'
import { useMutation } from 'react-query'

const { Option } = Select

const AddHomeChef = () => {
	const [form] = Form.useForm()

	const initialValues = {
		city: '',
		latitude: '0',
		longitude: '0',
		pincode: '0',
		state: '',
		address: '',
		name: '',
		googleLocation: '',
		description: '',
		homeChefImage: '',
		homeChefStatus: '0',
		cuisine: '',
		foodType: '0',
		maxPrice: '0',
		minPrice: '0',
		openingDay: '',
		maxTime: '0',
		minTime: '0',
		openingTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
		closingTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
	}

	const { mutate, isLoading } = useMutation(
		async (homeChef) => {
			const response = await fetch(ApiRoutes.addHomechef, {
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
		<div className="w-full lg:w-full mx-auto py-2">
			<Form form={form} initialValues={initialValues} onFinish={handleCreate}>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="name" rules={[{ required: true, message: 'Please input chef name' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Name:
							</div>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="city" rules={[{ required: true, message: 'Please input City' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>City:
							</div>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="address" rules={[{ required: true, message: 'Please input the address' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Address:
							</div>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="description">
							<div className="text-gray-600 mb-1">Description:</div>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="cuisine" rules={[{ required: true, message: 'Please input Cuisine' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Cuisine:
							</div>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="Pincode" rules={[{ required: true, message: 'Please input Pincode' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Pincode:
							</div>
							<Input type="number" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="state" rules={[{ required: true, message: 'Please input State' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>State:
							</div>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="foodType" rules={[{ required: true, message: 'Please select Food Type' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Food Type:
							</div>
							<Select
								defaultValue={initialValues.foodType}
								onChange={(value) => form.setFieldsValue({ foodType: value })}
							>
								<Select.Option value="0">Veg</Select.Option>
								<Select.Option value="1">Non-Veg</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="minPrice" rules={[{ required: true, message: 'Please input Min Price' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Min Price:
							</div>
							<Input type="number" min={0} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="maxPrice" rules={[{ required: true, message: 'Please input Max Price' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Max Price:
							</div>
							<Input type="number" min={0} />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="openingDay" rules={[{ required: true, message: 'Please select Opening Day' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Opening Day:
							</div>
							<Select
								value={initialValues.openingDay}
								onChange={(value) => form.setFieldsValue({ openingDay: value })}
							>
								<Select.Option value="Monday">Monday</Select.Option>
								<Select.Option value="Tuesday">Tuesday</Select.Option>
								<Select.Option value="Wednesday">Wednesday</Select.Option>
								<Select.Option value="Thursday">Thursday</Select.Option>
								<Select.Option value="Friday">Friday</Select.Option>
								<Select.Option value="Saturday">Saturday</Select.Option>
								<Select.Option value="Sunday">Sunday</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="openingTime"
							rules={[{ required: true, message: 'Please select Opening Time' }]}
						>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Opening Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="closingTime"
							rules={[{ required: true, message: 'Please select Closing Time' }]}
						>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Closing Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="maxTime"
							rules={[{ required: true, message: 'Please input Max Time for Delivery' }]}
						>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Max Time for Delivery:
							</div>
							<Input type="number" min={0} />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="homeChefImage"
							rules={[{ required: true, message: 'Please input the image URL' }]}
						>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Image URL:
							</div>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="homeChefStatus" rules={[{ required: true, message: 'Please select Status' }]}>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Status:
							</div>
							<Select
								value={form.getFieldValue('homeChefStatus')}
								onChange={(value) => form.setFieldsValue({ homeChefStatus: value })}
							>
								<Select.Option value="0">Inactive</Select.Option>
								<Select.Option value="1">Active</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="googleLocation"
							rules={[{ required: true, message: 'Please input the Google Location URL' }]}
						>
							<div className="text-gray-600 mb-1">
								<sup>*</sup>Google Location:
							</div>
							<Input />
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
