import { Table } from 'antd'

import styles from './AddHomeChefTable.module.css'

const AddHomeChefTable = ({ data }) => {
	//Table Headings
	const columns = [
		{
			title: 'Id',
			dataIndex: 'Id',
			key: 'Id',
		},
		{
			title: 'Name',
			dataIndex: 'Name',
			key: 'Name',
		},
		{
			title: 'Cuisine',
			dataIndex: 'Cuisine',
			key: 'Cuisine',
			render: (text) => <div style={{ width: 80 }}>{text}</div>,
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
			render: (text) => <div style={{ width: 75 }}>{text}</div>,
		},
	]

	return (
		<div className="w-full antialiased text-gray-900">
			<Table columns={columns} dataSource={data?.data} className={`${styles.antTable} ant-table`}></Table>
		</div>
	)
}

export default AddHomeChefTable
