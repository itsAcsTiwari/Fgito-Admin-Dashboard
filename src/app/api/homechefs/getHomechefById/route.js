/* eslint-disable indent */
import { NextResponse } from 'next/server'

export async function POST(request) {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`)

  const { id } = await request.json()

  if (!id) {
    throw new Error('No id provided')
  }

  const raw = JSON.stringify({ id: id })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: raw,
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homeChefById`, requestOptions)
    const result = await response.text()
    console.dir(result)
    return NextResponse.json({ result })
  } catch (error) {
    console.error('error', error)
    return NextResponse.error('An error occurred')
  }
}
