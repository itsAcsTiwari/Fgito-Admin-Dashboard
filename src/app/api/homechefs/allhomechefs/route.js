import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homechef`, {
		headers: {
			'Content-Type': 'application/json',
			authToken: `${process.env.NEXT_PUBLIC_API_KEY}`,
		},
	})

	const data = await res.json()
	return NextResponse.json({ data })
}
