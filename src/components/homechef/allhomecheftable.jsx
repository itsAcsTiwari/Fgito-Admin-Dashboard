import { Table } from 'antd'
import 'tailwindcss/tailwind.css'

const AddHomeChefTable = ({ data }) => {
	// console.log(data)
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
			render: (text) => <div style={{ width: 70 }}>{text}</div>,
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
			<Table columns={columns} dataSource={data?.data} className="ant-table">
				<style jsx>{`
					.ant-table {
						margin: 1rem 0;
						border-collapse: collapse;
						width: 100%;
						font-size: 0.875rem;
						color: #4b5563;
					}

					.ant-table th {
						background-color: #edf2f7;
						padding: 0.75rem;
						font-weight: 500;
						text-align: left;
					}

					.ant-table td {
						padding: 0.75rem;
						border-bottom: 1px solid #e2e8f0;
					}
				`}</style>
			</Table>
		</div>
	)
}

export default AddHomeChefTable
