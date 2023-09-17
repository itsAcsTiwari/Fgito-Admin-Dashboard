'use client'

import { ApiRoutes } from '@src/core';
import { Button, Form, Input, Modal, Select } from 'antd'
import { useState } from 'react'
import toast from 'react-hot-toast';

const OrderDetails = ({ order, onClose, isOpen }) => {
	const [showForm, setShowForm] = useState("")
	const [deliveryForm] = Form.useForm()
	const [statusForm] = Form.useForm()
	const [loading, setLoading] = useState(false)

	if (!order) return <></>
	const { id, orderNo, orderDetails, userId, orderStatus } = order
	const { UserName, orderAmount, orderDate } = orderDetails
	console.log(order);

	const handleModalOk = () => {
		console.dir('OK button clicked')
		onClose()
	}
	const handleUpdateDeliveryPerson = async (values) => {
		try {
			setLoading(true)
			// console.log('Received values of form: ', values);
			const response = await fetch(ApiRoutes.updateOrder, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...values, orderId: id })
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			toast.success('Delivery person details updated successfully')


			deliveryForm.resetFields();
			setShowForm(false);
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast.error('Something went wrong')
		}
	};

	const handleStatusUpdate = async (values) => {
		try {
			setLoading(true)
			// console.log('Received values of form: ', values);
			const response = await fetch(ApiRoutes.updateOrder, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...values, orderId: id })
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			toast.success('Order status updated successfully')
			setShowForm(false);
			setLoading(false)
		} catch (error) {
			// Handle any errors from the API call
			setLoading(false)
			toast.error('Something went wrong')
		}
	}

	const handleCancel = () => {
		deliveryForm.resetFields()
		statusForm.resetFields()
		setShowForm(false)
	}

	const selectOptions = [
		{
			label: 'Form of delivery person details',
			value: 'deliveryPerson',
		},
		{
			label: 'Form of order status',
			value: 'orderDetails',
		}
	]

	return (
		<Modal
			title={`Order Id: ${id}`}
			onCancel={onClose}
			open={isOpen}
			onOk={handleModalOk}
			okText="OK"
			footer={null}
			className="mx-auto w-full max-w-sm"
		>
			<div className="space-y-2 p-4">
				<p className="font-bold">Order No.: {orderNo ? orderNo : ''}</p>
				<p>User Id: {userId ? userId : ''}</p>
				<p>User Name: {UserName ? UserName : ''}</p>
				<p>Order Status: {typeof orderStatus == 'string' ? orderStatus : 'not available atm'}</p>
				<p>Order Date: {orderDate ? orderDate : ''}</p>
				<p>Order Amount: {orderAmount ? orderAmount : ''}</p>

				<div>
					<Select
						options={selectOptions}
						defaultValue="Form of delivery person details"
						onChange={(value) => setShowForm(value)}
					></Select>
					{showForm === "deliveryPerson" ? (
						<Form form={deliveryForm} onFinish={handleUpdateDeliveryPerson} layout="vertical">
							<Form.Item
								label="Delivery Person Name:"
								name="name"
								rules={[{ required: true, message: 'Please enter delivery person name' }]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="Delivery Person Age:"
								name="age"
								rules={[{ required: true, message: 'Please enter delivery person age' }]}
							>
								<Input type="number" min={18} />
							</Form.Item>

							<Form.Item
								label="Delivery Person Mobile Number:"
								name="mobile"
								rules={[{ required: true, message: 'Please enter delivery person mobile number' }]}
							>
								<Input />
							</Form.Item>

							<Form.Item>
								<div className="flex justify-between">
									<Button className="mr-2" onClick={handleCancel}>
										cancel
									</Button>
									<Button className="mr-2" htmlType="submit" loading={loading}>
										Submit
									</Button>
								</div>
							</Form.Item>
						</Form>
					) : null}
					{
						showForm === "orderDetails" ? (
							<Form form={statusForm} onFinish={handleStatusUpdate} layout="vertical">
								<Form.Item
									label="Order Status:"
									name="orderStatus"
									rules={[{ required: true, message: 'Please enter order status' }]}
								>
									<Input />
								</Form.Item>

								<Form.Item>
									<div className="flex justify-between">
										<Button className="mr-2" onClick={handleCancel}>
											cancel
										</Button>
										<Button className="mr-2" htmlType="submit" loading={loading}>
											Submit
										</Button>
									</div>
								</Form.Item>
							</Form>
						) : null
					}
				</div>
			</div>
		</Modal>
	)
}

export default OrderDetails
