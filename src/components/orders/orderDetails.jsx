'use client'

import { Button, Form, Input, Modal, Select } from 'antd'
import { useState } from 'react'

const OrderDetails = ({ order, onClose, isOpen }) => {
	const [showForm, setShowForm] = useState(false)
	const [form] = Form.useForm()

	if (!order) return <></>
	const { id, orderNo, orderDetails, userId, orderStatus } = order
	const { UserName, orderAmount, orderDate } = orderDetails

	const handleModalOk = () => {
		console.dir('OK button clicked')
	}

	const handleUpdateDeliveryPerson = (values) => {
		console.dir('Delivery Person Details:', values)
		form.resetFields()
		setShowForm(false)
	}

	const handleCancel = () => {
		form.resetFields()
		setShowForm(false)
	}

	const selectOptions = [
		{
			label: 'Form of delivery person details',
			value: 'deliveryPerson',
		},
	]

	return (
		<Modal
			title={`Order Id: ${id}`}
			onCancel={onClose}
			visible={isOpen}
			onOk={handleModalOk}
			okText="OK"
			footer={null}
			className="w-full max-w-sm mx-auto"
		>
			<div className="p-4 space-y-2">
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
						onChange={(value) => setShowForm(value === 'deliveryPerson')}
					></Select>
					{showForm && (
						<Form form={form} onFinish={handleUpdateDeliveryPerson} layout="vertical">
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
								<Input type="number" />
							</Form.Item>

							<Form.Item>
								<div className="flex justify-between">
									<Button className="mr-2" onClick={handleCancel}>
										Update
									</Button>
									<Button className="mr-2" htmlType="submit">
										Submit
									</Button>
								</div>
							</Form.Item>
						</Form>
					)}
				</div>
			</div>
		</Modal>
	)
}

export default OrderDetails
