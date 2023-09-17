import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homeChef`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		},
	})
	// console.log(res, "res");
	const data = await res.json()
	// console.log(data, "data");
	return NextResponse.json({ data })
}
