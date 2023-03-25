import { Table, Tag } from 'antd'
import classNames from 'classnames'

const OrdersTable = ({ data }) => {
	const handleIdClick = (id) => {
		console.dir(`Clicked id ${id}`)
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
				<button onClick={() => handleIdClick(text)}>
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
			render: (text) => <span>{text ? text.toUpperCase() : ''}</span>,
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
		<Table dataSource={data?.data} columns={columns} rowKey={(record) => record.id} scroll={{ x: 'max-content' }} />
	)
}

export default OrdersTable
