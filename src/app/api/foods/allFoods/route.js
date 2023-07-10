import { NextResponse } from 'next/server'

export async function POST(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`)


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
