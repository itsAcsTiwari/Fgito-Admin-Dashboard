// 'use client'

// import { Table, Tag } from 'antd'
// import classNames from 'classnames'
// import { useState } from 'react'

// import OrderDetails from './orderDetails'

// const OrdersTable = ({ data }) => {
// 	const [selectedOrder, setSelectedOrder] = useState(null)
// 	const [orders, setOrders] = useState(data.data);

// 	const handleIdClick = (id) => {
// 		const order = data.data.find((orderObj) => orderObj.id === id)
// 		setSelectedOrder(order)
// 	}

// 	const handleModalClose = () => {
// 		setSelectedOrder(null)
// 	}

// 	const updateOrderStatus = (orderId, newStatus) => {
// 		const updatedOrders = orders.map((order) => {
// 		  if (order.id === orderId) {
// 			return { ...order, orderStatus: newStatus };
// 		  }
// 		  return order;
// 		});
// 		setOrders(updatedOrders);
// 	  };

// 	const columns = [
// 		{
// 			title: 'S.No',
// 			dataIndex: 'index',
// 			key: 'index',
// 			render: (text, record, index) => index + 1,
// 		},
// 		{
// 			title: 'Id',
// 			dataIndex: 'id',
// 			key: 'id',
// 			render: (text) => (
// 				<button onClick={(e) => handleIdClick(e.target.innerHTML)}>
// 					<Tag color="blue">{text}</Tag>
// 				</button>
// 			),
// 		},
// 		{
// 			title: 'Order No.',
// 			dataIndex: 'orderNo',
// 			key: 'orderNo',
// 			sorter: (a, b) => a.orderNo - b.orderNo,
// 			sortDirections: ['ascend', 'descend'],
// 		},
// 		{
// 			title: 'User Id',
// 			dataIndex: 'userId',
// 			key: 'userId',
// 		},
// 		{
// 			title: 'User Name',
// 			dataIndex: ['orderDetails', 'UserName'],
// 			key: 'UserName',
// 		},
// 		{
// 			title: 'Order Status',
// 			dataIndex: 'orderStatus',
// 			key: 'orderStatus',
// 			className: classNames('text-green-500'),
// 		},
// 		{
// 			title: 'Order Date',
// 			dataIndex: ['orderDetails', 'orderDate'],
// 			key: 'orderDate',
// 			width: 200,
// 			sorter: (a, b) => new Date(a.orderDetails.orderDate) - new Date(b.orderDetails.orderDate),
// 			sortDirections: ['ascend', 'descend'],
// 		},
// 		{
// 			title: 'Order Amount',
// 			dataIndex: ['orderDetails', 'orderAmount'],
// 			key: 'orderAmount',
// 			className: classNames('text-purple-500'),
// 		},
// 	]

// 	return (
// 		<>
// 			<Table
// 				className="max-w-screen-lg"
// 				dataSource={data?.data}
// 				columns={columns}
// 				rowKey={(record) => record.id}
// 				scroll={{ x: 'max-content' }}
// 				pagination={{
// 					position: ['bottomCenter'],
// 					pageSize: 20,
// 				}}
// 			/>
// 			<OrderDetails order={selectedOrder} onClose={handleModalClose} isOpen={selectedOrder !== null} 
// 			updateOrderStatus={updateOrderStatus}/>
// 		</>
// 	)
// }

// export default OrdersTable


'use client'

import { Table, Tag } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'

import OrderDetails from './orderDetails'

const OrdersTable = ({ data }) => {
	const [selectedOrder, setSelectedOrder] = useState(null)

	const handleIdClick = (id) => {
		const order = data.data.find((orderObj) => orderObj.id === id)
		setSelectedOrder(order)
	}

	const handleModalClose = () => {
		setSelectedOrder(null)
	}

	const columns = [
		{
			title: 'S.No',
			dataIndex: 'index',
			key: 'index',
			render: (text, record, index) => index + 1,
		},
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text) => (
				<button onClick={(e) => handleIdClick(e.target.innerHTML)}>
					<Tag color="blue">{text}</Tag>
				</button>
			),
		},
		{
			title: 'Order No.',
			dataIndex: 'orderNo',
			key: 'orderNo',
			sorter: (a, b) => a.orderNo - b.orderNo,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'User Id',
			dataIndex: 'userId',
			key: 'userId',
		},
		{
			title: 'User Name',
			dataIndex: ['orderDetails', 'UserName'],
			key: 'UserName',
		},
		{
			title: 'Order Status',
			dataIndex: 'orderStatus',
			key: 'orderStatus',
			className: classNames('text-green-500'),
		},
		{
			title: 'Order Date',
			dataIndex: ['orderDetails', 'orderDate'],
			key: 'orderDate',
			width: 200,
			sorter: (a, b) => new Date(a.orderDetails.orderDate) - new Date(b.orderDetails.orderDate),
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Order Amount',
			dataIndex: ['orderDetails', 'orderAmount'],
			key: 'orderAmount',
			className: classNames('text-purple-500'),
		},
	]

	return (
		<>
			<Table
				className="max-w-screen-lg"
				dataSource={data?.data}
				columns={columns}
				rowKey={(record) => record.id}
				scroll={{ x: 'max-content' }}
				pagination={{
					position: ['bottomCenter'],
					pageSize: 20,
				}}
			/>
			<OrderDetails order={selectedOrder} onClose={handleModalClose} isOpen={selectedOrder !== null} />
		</>
	)
}

export default OrdersTable