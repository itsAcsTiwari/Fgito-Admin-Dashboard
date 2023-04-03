'use client'

import { Button, Form, Input, message, Modal, Select, TimePicker } from 'antd'
import moment from 'moment'
import { useState } from 'react'

const { Option } = Select

const AddHomeChefModal = ({ visible, onCancel, onCreate }) => {
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

	const [loading, setLoading] = useState(false)

	const handleCreate = async () => {
		try {
			setLoading(true)
			const values = await form.validateFields()
			onCreate(values)
			console.dir(values)
			form.resetFields()
			setLoading(false)
		} catch (err) {
			console.dir('Error: ', err)
			setLoading(false)
		}
	}

	const handleCancel = () => {
		onCancel()
		form.resetFields()
	}

	return (
		<Modal
			title="Add Home Chef"
			visible={visible}
			onOk={handleCreate}
			onCancel={handleCancel}
			confirmLoading={loading}
		>
			<Form form={form} initialValues={initialValues}>
				<Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input chef name' }]}>
					<Input value={initialValues.name} onChange={(e) => form.setFieldsValue({ name: e.target.value })} />
				</Form.Item>
				<Form.Item name="city" label="City" rules={[{ required: true, message: 'Please input City' }]}>
					<Input value={initialValues.city} onChange={(e) => form.setFieldsValue({ city: e.target.value })} />
				</Form.Item>
				<Form.Item
					name="address"
					label="Address"
					rules={[{ required: true, message: 'Please input the address' }]}
				>
					<Input
						value={initialValues.address}
						onChange={(e) => form.setFieldsValue({ address: e.target.value })}
					/>
				</Form.Item>
				<Form.Item name="description" label="Description">
					<Input
						value={initialValues.description}
						onChange={(e) => form.setFieldsValue({ description: e.target.value })}
					/>
				</Form.Item>
				<Form.Item name="cuisine" label="Cuisine" rules={[{ required: true, message: 'Please input Cuisine' }]}>
					<Input
						value={initialValues.cuisine}
						onChange={(e) => form.setFieldsValue({ cuisine: e.target.value })}
					/>
				</Form.Item>
				<Form.Item name="Pincode" label="Pincode" rules={[{ message: 'Please input Pincode' }]}>
					<Input
						type="number"
						value={initialValues.pincode}
						onChange={(e) => form.setFieldsValue({ pincode: e.target.value })}
					/>
				</Form.Item>
				<Form.Item name="state" label="State" rules={[{ required: true, message: 'Please input State' }]}>
					<Input
						value={initialValues.state}
						onChange={(e) => form.setFieldsValue({ state: e.target.value })}
					/>
				</Form.Item>
				<Form.Item
					name="foodType"
					label="Food Type"
					rules={[{ required: true, message: 'Please select Food Type' }]}
				>
					<Select
						value={initialValues.foodType}
						onChange={(value) => form.setFieldsValue({ foodType: value })}
					>
						<Option value="0">Veg</Option>
						<Option value="1">Non-Veg</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="minPrice"
					label="Min Price"
					rules={[{ required: true, message: 'Please input Min Price' }]}
				>
					<Input
						type="number"
						value={initialValues.minPrice}
						onChange={(e) => form.setFieldsValue({ minPrice: e.target.value })}
					/>
				</Form.Item>
				<Form.Item
					name="maxPrice"
					label="Max Price"
					rules={[{ required: true, message: 'Please input Max Price' }]}
				>
					<Input
						type="number"
						value={initialValues.maxPrice}
						onChange={(e) => form.setFieldsValue({ maxPrice: e.target.value })}
					/>
				</Form.Item>
				<Form.Item
					name="homeChefStatus"
					label="Status"
					rules={[{ required: true, message: 'Please select Status' }]}
				>
					<Select
						value={initialValues.homeChefStatus}
						onChange={(value) => form.setFieldsValue({ homeChefStatus: value })}
					>
						<Option value="0">Inactive</Option>
						<Option value="1">Active</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="openingDay"
					label="Opening Day"
					rules={[{ required: true, message: 'Please select Opening Day' }]}
				>
					<Select
						value={initialValues.openingDay}
						onChange={(value) => form.setFieldsValue({ openingDay: value })}
					>
						<Option value="Monday">Monday</Option>
						<Option value="Tuesday">Tuesday</Option>
						<Option value="Wednesday">Wednesday</Option>
						<Option value="Thursday">Thursday</Option>
						<Option value="Friday">Friday</Option>
						<Option value="Saturday">Saturday</Option>
						<Option value="Sunday">Sunday</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="openingTime"
					label="Opening Time"
					rules={[{ required: true, message: 'Please select Opening Time' }]}
				>
					<TimePicker
						value={initialValues.openingTime}
						onChange={(value) => form.setFieldsValue({ openingTime: value })}
					/>
				</Form.Item>
				<Form.Item
					name="closingTime"
					label="Closing Time"
					rules={[{ required: true, message: 'Please select Closing Time' }]}
				>
					<TimePicker
						value={initialValues.closingTime}
						onChange={(value) => form.setFieldsValue({ closingTime: value })}
					/>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default AddHomeChefModal
