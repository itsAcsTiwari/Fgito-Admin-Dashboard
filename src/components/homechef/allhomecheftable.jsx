import { Table, Tag } from 'antd'

import styles from './AddHomeChefTable.module.css'

const AddHomeChefTable = ({ data }) => {
	// console.log(data)

	// Handle id column click event
	const handleIdClick = (id) => {
		console.log(`Clicked id ${id}`)
	}

	// Table columns
	const columns = [
		{
			title: 'S.No',
			dataIndex: 'serialNumber',
			key: 'serialNumber',
		},
		{
			title: 'Id',
			dataIndex: 'Id',
			key: 'Id',
			render: (text) => (
				<a href="#" onClick={() => handleIdClick(text)}>
					<Tag color="blue">{text}</Tag>
				</a>
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
			render: (text) => (
				<div style={{ width: 75 }}>{text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}</div>
			),
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
			<Table
				columns={columns}
				dataSource={data?.data.map((item, index) => ({ ...item, serialNumber: index + 1 }))}
				className={`${styles.antTable} ant-table`}
			/>
		</div>
	)
}

export default AddHomeChefTable
