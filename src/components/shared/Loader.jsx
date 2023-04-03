import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loader = () => {
	return (
		<div className="align-middle text-center m-40">
			<Spin indicator={<LoadingOutlined style={{ fontSize: 84 }} />} />
		</div>
	)
}

export default Loader
