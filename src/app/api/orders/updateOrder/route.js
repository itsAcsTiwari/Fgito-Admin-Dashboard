import { NextResponse } from 'next/server'

export async function PUT(request) {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append(
		'Authorization',
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ6TERKenZ5T0YyVFFUOFBEUHVNSyIsImlhdCI6MTY4MTMwMDUzNX0.dq5ozMrbTrLtaYkrweVD5ik92UlGAMIC2sFKSMIyb40',
	)

	const { orderId, ...body } = await request.json()

	const requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: JSON.stringify(body),
		redirect: 'follow',
	}

	try {
		const response = await fetch(`https://fgito-api.vercel.app/api/order/${orderId}`, requestOptions)
		const result = await response.text()
		return NextResponse.json({ message: result })
	} catch (error) {
		console.dir('error', error)
		return NextResponse.error()
	}
}
