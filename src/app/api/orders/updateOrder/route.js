import { NextResponse } from 'next/server'

export async function PUT(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`)


	const { orderId, ...body } = await request.json()

	const requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: JSON.stringify(body),
		redirect: 'follow',
	}

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${orderId}`, requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.dir('error', error)
		return NextResponse.error()
	}
}