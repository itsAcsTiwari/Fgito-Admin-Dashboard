// import { Input } from 'antd'
// import classNames from 'classnames'
// import React from 'react'

// const RoundedInput = ({ className, ...restProps }) => (
// 	<Input className={classNames('rounded', className)} {...restProps} />
// )

// export default RoundedInput

import { Input } from 'antd'
import classNames from 'classnames'
import React from 'react'

const RoundedInput = ({ className, label, error, ...restProps }) => {
	return (
		<div className={classNames('rounded', className)}>
			{label && <label htmlFor={restProps.id}>{label}</label>}
			<Input {...restProps} />
			{error && <div className="error">{error}</div>}
		</div>
	)
}

export default RoundedInput
