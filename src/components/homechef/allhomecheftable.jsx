'use client'

import { HOMECHEFS } from '@src/core'
import { Table, Tag } from 'antd'
import { useRouter } from 'next/navigation'

const AllHomeChefTable = ({ data }) => {
	const router = useRouter()

	const handleIdClick = (id) => {
		router.push(`${HOMECHEFS}/${id}`)
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
			dataIndex: 'Id',
			key: 'Id',
			render: (text) => (
				<button onClick={() => handleIdClick(text)}>
					<Tag color="blue">{text}</Tag>
				</button>
			),
		},
		{
			title: 'Name',
			dataIndex: 'Name',
			key: 'Name',
		},
		{
			title: 'Address',
			dataIndex: 'Address',
			key: 'Address',
		},
		{
			title: 'OpeningDays',
			dataIndex: 'OpeningDays',
			key: 'OpeningDays',
			render: (text) => <div className="w-20 capitalize">{text}</div>,
		},
		{
			title: 'Status',
			dataIndex: 'Status',
			key: 'Status',
			render: (text) => (text === 1 ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
		},
	]

	return (
		<div className="w-full text-gray-900 antialiased">
			<Table
				className="max-w-screen-lg"
				columns={columns}
				scroll={{ x: 'max-content' }}
				pagination={{
					position: ['bottomCenter'],
					pageSize: 20,
				}}
				dataSource={data?.data.map((item, index) => ({ ...item, serialNumber: index + 1 }))}
			/>
		</div>
	)
}

export default AllHomeChefTable
