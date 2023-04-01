'use client'
import { Table, Tag } from 'antd'
import { useRouter } from 'next/navigation'

import styles from './AddHomeChefTable.module.css'

const AddHomeChefTable = ({ data }) => {
	const router = useRouter()
	// Handle id column click event
	const handleIdClick = (id) => {
		router.push(`/homeChefs/${id}`)
	}

	// Table Headings
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
			render: (text) => <div className="capitalize w-20">{text}</div>,
		},
		{
			title: 'Status',
			dataIndex: 'Status',
			key: 'Status',
			render: (text) => (text === 1 ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
		},
	]

	return (
		<div className="w-full antialiased text-gray-900">
			<Table columns={columns} dataSource={data?.data} className={`${styles.antTable} ant-table`} />
		</div>
	)
}

export default AddHomeChefTable
