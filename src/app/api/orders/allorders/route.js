import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		},
		redirect: 'follow'
	})

	const data = await res.json()
	return NextResponse.json({ data })

}

