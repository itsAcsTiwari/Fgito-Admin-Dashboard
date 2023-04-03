import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
	return (
		<div className='align-middle text-center m-40'>
			<Spin 
				className='' 
				indicator={
					<LoadingOutlined 
						style={{fontSize:84}}
					/>
				} 
			/>
		</div>
	)
}


export default Loader