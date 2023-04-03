'use client'
import { Modal } from 'antd'

<<<<<<< HEAD
import { Modal, Spin } from 'antd'
import { useState } from 'react'

const OrderDetails = ({ orderId, onClose, data }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [orderData, setOrderData] = useState(null)

	const order = data.data.find((orderObj) => orderObj.id === orderId)

=======
const OrderDetails = ({ order, onClose, isOpen }) => {
	if (!order) return <></>
	const { id, orderNo, orderDetails, userId, orderStatus } = order
	const { UserName, orderAmount, orderDate } = orderDetails
>>>>>>> 797db55b1e3dfdb04aef6584101e322d76b87281
	const handleModalOk = () => {
		console.dir('OK button clicked')
	}

<<<<<<< HEAD
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
=======
	return (
		<Modal
			title={`Order Id: ${id}`}
			onCancel={onClose}
			open={isOpen}
>>>>>>> 797db55b1e3dfdb04aef6584101e322d76b87281
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
			</div>
		</Modal>
	)
}

export default OrderDetails
