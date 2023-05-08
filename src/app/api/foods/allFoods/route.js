// import { NextResponse } from 'next/server'

// export async function GET() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getFood`, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			authToken: `${process.env.NEXT_PUBLIC_API_KEY}`,
// 		},
// 	})
// 	const data = await res.json()
// 	return NextResponse.json({ data })
// }

// import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	const myHeaders = new Headers()
// 	myHeaders.append('Content-Type', 'application/json')
// 	myHeaders.append('authToken', `${process.env.NEXT_PUBLIC_API_KEY}`)

// 	const body = await request.json()

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: JSON.stringify(body),
// 		redirect: 'follow',
// 	}

// 	try {
// 		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getFood`, requestOptions)
// 		const result = await response.json()
// 		return NextResponse.json({ data: result })
// 	} catch (error) {
// 		console.dir('error', error)
// 		return NextResponse.error()
// 	}
// }

// import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	const myHeaders = new Headers()
// 	myHeaders.append('Content-Type', 'application/json')

// 	const body = await request.json()

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: JSON.stringify(body),
// 		redirect: 'follow',
// 	}

// 	try {
// 		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homeChef/getFood?authToken=${process.env.NEXT_PUBLIC_API_KEY}`, requestOptions)
// 		const result = await response.json()
// 		return NextResponse.json({ data: result })
// 	} catch (error) {
// 		console.dir('error', error)
// 		return NextResponse.error()
// 	}
// }

// import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	const myHeaders = new Headers()
// 	myHeaders.append('Content-Type', 'application/json')

// 	const { homeChefId, ...body } = await request.json()

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: JSON.stringify(body),
// 		redirect: 'follow',
// 	}

// 	try {
// 		const apiUrl = process.env.NEXT_PUBLIC_API_URL
// 		const response = await fetch(`${apiUrl}/getFood/${homeChefId}`, requestOptions)
// 		// const response = await fetch(`https://fgito-api.vercel.app/api/getFood/${homeChefId}`, requestOptions)
// 		const result = await response.text()
// 		return NextResponse.json({ message: result })
// 	} catch (error) {
// 		console.dir('error', error)
// 		return NextResponse.error()
// 	}
// }

///////////////////////////////////////////////////////

import { NextResponse } from 'next/server'

export async function POST(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	const { homeChefId } = await request.json()
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify({ homeChefId }),
		redirect: 'follow',
	}

	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL
		const response = await fetch(`${apiUrl}/api/getFood`, requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.error('error', error)
		return NextResponse.error()
	}
}

////////////////////////////////////////////////////////////////////

// import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	const myHeaders = new Headers()
// 	myHeaders.append('Content-Type', 'application/json')

// 	const body = await request.json()

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: JSON.stringify(body),
// 		redirect: 'follow',
// 	}

// 	try {
// 		const response = await fetch(
// 			`${process.env.NEXT_PUBLIC_API_URL}/homeChef/getFood?authToken=${process.env.NEXT_PUBLIC_API_KEY}`,
// 			requestOptions,
// 		)
// 		const result = await response.json()
// 		return NextResponse.json({ data: result })
// 	} catch (error) {
// 		console.dir('error', error)
// 		return NextResponse.error()
// 	}
// }

/////////////////////////////////////////////////////////////

// myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ6TERKenZ5T0YyVFFUOFBEUHVNSyIsImlhdCI6MTY4MTMwMDUzNX0.dq5ozMrbTrLtaYkrweVD5ik92UlGAMIC2sFKSMIyb40')
