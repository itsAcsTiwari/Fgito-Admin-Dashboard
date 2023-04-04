'use client'
import { Modal } from 'antd'

const OrderDetails = ({ order, onClose, isOpen }) => {
	if (!order) return <></>
	const { id, orderNo, orderDetails, userId, orderStatus } = order
	const { UserName, orderAmount, orderDate } = orderDetails
	const handleModalOk = () => {
		console.dir('OK button clicked')
	}

	return (
		<Modal
			title={`Order Id: ${id}`}
			onCancel={onClose}
			open={isOpen}
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
