import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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