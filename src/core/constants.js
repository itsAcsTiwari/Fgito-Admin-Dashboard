import { group, home } from './icons'

export const PageRoutes = {
  Home: '/',
  Homechef: '/homechef',
  Customer: '/customer',
  Orders: '/orders',
  Sales: '/sales',
  Subscribers: '/subscribers',
}

export const NavigationRoutes = [
  {
    name: 'dashboard',
    route: PageRoutes.Home,
    children: [{ name: 'home', route: PageRoutes.Home, icon: home }],
  },
  {
    name: 'homechef',
    route: PageRoutes.Homechef,
    children: [{ name: 'home', route: PageRoutes.Homechef, icon: home }],
  },
  {
    name: 'customer',
    route: PageRoutes.Customer,
    children: [
      { route: PageRoutes.Customer, name: 'home', icon: home },
      { route: PageRoutes.Customer + PageRoutes.Subscribers, name: 'subscribers', icon: group },
    ],
  },
  {
    name: 'Orders',
    route: PageRoutes.Orders,
    children: [{ name: 'home', route: PageRoutes.Orders, icon: home }],
  },
  {
    name: 'Sales',
    route: PageRoutes.Sales,
    children: [{ name: 'home', route: PageRoutes.Sales, icon: home }],
  },
]

export const ApiRoutes = {}
