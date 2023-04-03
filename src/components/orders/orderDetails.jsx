'use client'

import { Modal, Spin } from 'antd'
import { useState } from 'react'

const OrderDetails = ({ orderId, onClose, data }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [orderData, setOrderData] = useState(null)

	const order = data.data.find((orderObj) => orderObj.id === orderId)

	const handleModalOk = () => {
		console.dir('OK button clicked')
	}

	if (isLoading && order) {
		setOrderData({
			id: orderId,
			orderNo: order.orderNo,
			userId: order.userId,
			orderDetails: {
				UserName: order.orderDetails.UserName,
				orderDate: order.orderDetails.orderDate,
				orderAmount: order.orderDetails.orderAmount,
			},
			orderStatus: order.orderStatus,
		})
		setIsLoading(false)
	}

	return (
		<Modal
			title={`Order Id: ${orderId}`}
			visible={true}
			onCancel={onClose}
			onOk={handleModalOk}
			okText="OK"
			footer={null}
			className="w-full max-w-sm mx-auto"
		>
			{isLoading ? (
				<div className="flex justify-center items-center h-32">
					<Spin size="large" />
				</div>
			) : (
				<div className="p-4">
					<p className="font-bold">Order No.: {orderData.orderNo}</p>
					<p className="mt-2">User Id: {orderData.userId}</p>
					<p className="mt-2">User Name: {orderData.orderDetails.UserName}</p>
					<p className="mt-2">Order Status: {orderData.orderStatus}</p>
					<p className="mt-2">Order Date: {orderData.orderDetails.orderDate}</p>
					<p className="mt-2">Order Amount: {orderData.orderDetails.orderAmount}</p>
				</div>
			)}
		</Modal>
	)
}

export default OrderDetails
