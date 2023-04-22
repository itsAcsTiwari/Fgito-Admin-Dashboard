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
		const response = await fetch('https://fgito-api.vercel.app/api/homeChef', requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.dir('error', error)
		return NextResponse.error()
	}
}