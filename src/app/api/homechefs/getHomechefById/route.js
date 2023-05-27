/* eslint-disable indent */
import { NextResponse } from 'next/server'

export async function GET({ req }) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append('authToken', `${process.env.NEXT_PUBLIC_API_KEY}`)

	const { id } = await req.body()

	if (!id) {
		return null
	}

	const raw = JSON.stringify({ id: id })

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
		body: raw,
	}

	try {
		const response = await fetch('https://fgito-api.vercel.app/api/homeChefById', requestOptions)
		const result = await response.text()
		console.dir(result)
		return NextResponse.json({ result })
	} catch (error) {
		console.error('error', error)
		return NextResponse.error('An error occurred')
	}
}
