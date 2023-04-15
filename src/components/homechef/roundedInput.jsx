import { Input } from 'antd'
import classNames from 'classnames'
import React from 'react'

const RoundedInput = ({ className, ...restProps }) => (
	<Input className={classNames('rounded', className)} {...restProps} />
)

export default RoundedInput
