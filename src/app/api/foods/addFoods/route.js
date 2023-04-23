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
// 		const response = await fetch('https://fgito-api.vercel.app/api/food', requestOptions)
// 		const result = await response.text()
// 		return NextResponse.json({ message: result })
// 	} catch (error) {
// 		console.dir('error', error)
// 		return NextResponse.error()
// 	}
// }


import { NextResponse } from 'next/server'

export async function POST(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	const body = await request.json()


	if (!body.name || !body.description || !body.price) {
		return NextResponse.error({ message: 'Please provide all required fields' })
	}


	if (isNaN(body.price)) {
		return NextResponse.error({ message: 'Please provide a valid price' })
	}

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(body),
		redirect: 'follow',
	}

	try {
		const response = await fetch('https://fgito-api.vercel.app/api/food', requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.dir('error', error)
		return NextResponse.error()
	}
}
