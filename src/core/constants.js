export const ORDERS = '/orders'
export const HOMECHEFS = '/homechefs'

export const PageRoutes = {
  HOME: '/',
  All_HOME_CHEFS: '/homechefs/allHomeChefs',
  ADD_HOME_CHEFS: '/homechefs/addHomeChefs',
  ALL_ORDERS: '/orders/allOrders',
  ADD_ORDERS: '/orders/addOrders',
  SALES: '/sales',
}

export const ApiRoutes = {
  allHomechefs: '/api/homechefs/allhomechefs',
  addHomechef: '/api/homechefs/addHomeChefs',
  getHomechefById: '/api/homechefs/getHomechefById',
  editHomechefs: '/api/homechefs/editHomechefs',
  deleteHomchefs: '/api/homechefs/deleteHomchefs',

  allOrders: '/api/orders/allorders',
  updateOrder: '/api/orders/updateOrder',

  addFood: '/api/foods/addFoods',
  allFoods: '/api/foods/allFoods',
}
