/* eslint-disable indent */
import { NextResponse } from 'next/server'

export async function DELETE(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	const { homeChefId } = await request.json() // Get the ID of the home chef from the request body

	const requestOptions = {
		method: 'DELETE',
		headers: myHeaders,
		body: JSON.stringify({ homeChefId }), // Send the ID of the home chef in the request body
		redirect: 'follow',
	}

	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL
		const response = await fetch(`${apiUrl}/api/homeChef`, requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.error('error', error)
		return NextResponse.error()
	}
}
