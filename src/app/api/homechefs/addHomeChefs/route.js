import { NextResponse } from 'next/server'

export async function POST() {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
        'City': 'dehradun',
        'Latitude': 30.367455469738445,
        'Longitude': 78.0717284034201,
        'Pincode': 248001,
        'State': 'Uttra',
        'address': 'rajpur road',
        'closingTime': 'ctime',
        'cuisine': [
            'PUNJABI',
            'GARHWALI'
        ],
        'description': 'hjdfavbiyasdvb',
        'foodType': 1,
        'googleLocation': 'Url',
        'homeChefImage': 'http',
        'homeChefStatus': 1,
        'maxPrice': 2888,
        'maxTime': 3400,
        'minPrice': 40,
        'minTime': 200,
        'name': 'new homechef',
        'openingDay': [
            'mon',
            'wed'
        ],
        'openingTime': 'Otime'
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
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



// import { NextResponse } from 'next/server'

// export async function POST(request) {
//     const myHeaders = new Headers()
//     myHeaders.append('Content-Type', 'application/json')

//     const body = await request.json()

//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify(body),
//         redirect: 'follow'
//     }

//     try {
//         const response = await fetch('https://fgito-api.vercel.app/api/homeChef', requestOptions)
//         const result = await response.text()
//         return NextResponse.json({ message: result })
//     } catch (error) {
//         console.dir('error', error)
//         return NextResponse.error()
//     }
// }

