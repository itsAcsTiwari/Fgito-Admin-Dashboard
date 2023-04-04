'use client'

import { ApiRoutes } from '@src/core'
import { Button, Form, Input, Modal, Select, TimePicker } from 'antd'
import moment from 'moment'
import { useState } from 'react'
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
		<div className="w-full lg:w-1/2 mx-auto py-2">
			<Form form={form} initialValues={initialValues} onFinish={handleCreate}>
				<Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input chef name' }]}>
					<Input />
				</Form.Item>
				<Form.Item name="city" label="City" rules={[{ required: true, message: 'Please input City' }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name="address"
					label="Address"
					rules={[{ required: true, message: 'Please input the address' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="description" label="Description">
					<Input />
				</Form.Item>
				<Form.Item name="cuisine" label="Cuisine" rules={[{ required: true, message: 'Please input Cuisine' }]}>
					<Input />
				</Form.Item>
				<Form.Item name="Pincode" label="Pincode" rules={[{ message: 'Please input Pincode' }]}>
					<Input type="number" />
				</Form.Item>
				<Form.Item name="state" label="State" rules={[{ required: true, message: 'Please input State' }]}>
					<Input />
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
					<Input type="number" />
				</Form.Item>
				<Form.Item
					name="maxPrice"
					label="Max Price"
					rules={[{ required: true, message: 'Please input Max Price' }]}
				>
					<Input type="number" />
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
					<TimePicker />
				</Form.Item>
				<Form.Item
					name="closingTime"
					label="Closing Time"
					rules={[{ required: true, message: 'Please select Closing Time' }]}
				>
					<TimePicker />
				</Form.Item>
				<Button className="bg-white text-black" htmlType="submit" disabled={isLoading}>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default AddHomeChef
