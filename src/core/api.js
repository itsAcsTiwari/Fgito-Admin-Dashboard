import axios from 'axios'

export const authAPI = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
	},
})

export const loginApi = async (payload) => {
	const { data } = await authAPI.post(`/auth/login`, payload)
	return data
}

export const showError = (error) => {
	const res = error.response
	const message = res.data.message

	console.error(message === undefined ? 'Something went wrong!' : message)
}
