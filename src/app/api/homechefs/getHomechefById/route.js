/* eslint-disable indent */

import fetch from 'node-fetch'

export default async function handler(req, res) {
	const myHeaders = new fetch.Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append(
		'Authorization',
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ6TERKenZ5T0YyVFFUOFBEUHVNSyIsImlhdCI6MTY4MzQ2MzExN30.u8cS3EU4keSCvK5ooKDgoHkd5aHcRNiPlLdOwBlZY98',
	)

	const { id } = await req.json()

	const raw = JSON.stringify({
		id,
	})

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	}

	try {
		const response = await fetch('https://fgito-api.vercel.app/api/homeChefById', requestOptions)
		const result = await response.text()
		console.dir(result)
		res.status(200).json({ result })
	} catch (error) {
		console.dir('error', error)
		res.status(500).json({ error: 'An error occurred' })
	}
}

//////////////////////////// Params use kr ka below code

// export async function GET({ params }) {
//     const myHeaders = new Headers()
//     myHeaders.append('Content-Type', 'application/json')
//     myHeaders.append(
//         'Authorization',
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ6TERKenZ5T0YyVFFUOFBEUHVNSyIsImlhdCI6MTY3ODgxNDY2NH0.ZBVgMpRK9cIkNflw31nEa9WIcFYNqNaHCJ9Udd_23FY'
//     )

//     const { id } = await params

//     const requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow',
//     }

//     try {
//         const response = await fetch(`https://fgito-api.vercel.app/api/homeChefById?id=${id}`, requestOptions)
//         const result = await response.text()
//         console.dir(result)
//         return NextResponse.json({ result })
//     } catch (error) {
//         console.error('error', error)
//         return NextResponse.error('An error occurred')
//     }
// }
