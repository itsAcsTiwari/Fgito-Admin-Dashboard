// import React from 'react'

// const DetailsHomechef = ({ homeChef }) => {
// 	console.dir(homeChef)
// 	return <div>DetailsHomechef</div>
// }

// export default DetailsHomechef

import React from 'react'

const DetailsHomechef = ({ homeChef }) => {
	console.dir(homeChef)
	return (
		<div>
			<pre>{JSON.stringify(homeChef, null, 2)}</pre>
		</div>
	)
}

export default DetailsHomechef
