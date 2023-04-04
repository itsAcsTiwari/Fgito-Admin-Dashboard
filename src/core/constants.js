export const ORDERS = '/orders'
export const HOMECHEFS = '/homechefs'

export const PageRoutes = {
	HOME: '/',
	All_HOME_CHEFS: '/homechefs/allHomechefs',
	ADD_HOME_CHEFS: '/homechefs/addHomechefs',
	ALL_ORDERS: '/orders/allOrders',
	ADD_ORDERS: '/orders/addOrders',
	SALES: '/sales',
}

export const ApiRoutes = {
	allHomechefs: '/api' + PageRoutes.All_HOME_CHEFS,
	addHomechef: '/api' + PageRoutes.ADD_HOME_CHEFS,
	allOrders: '/api' + PageRoutes.ALL_ORDERS,
	addOrder: '/api' + PageRoutes.ADD_ORDERS,
}
