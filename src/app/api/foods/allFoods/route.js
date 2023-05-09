import { NextResponse } from 'next/server'

export async function POST(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	const body = await request.json()

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(body),
		redirect: 'follow',
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/homeChef/getFood?authToken=${process.env.NEXT_PUBLIC_API_KEY}`,
			requestOptions,
		)
		const result = await response.json()
		return NextResponse.json({ data: result })
	} catch (error) {
		console.dir('error', error)
		return NextResponse.error()
	}
}
