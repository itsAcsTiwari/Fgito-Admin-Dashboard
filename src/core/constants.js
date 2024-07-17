import { Group, Home } from './icons'

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
    children: [{ name: 'home', route: PageRoutes.Home, icon: <Home /> }],
  },
  {
    name: 'homechef',
    route: PageRoutes.Homechef,
    children: [{ name: 'home', route: PageRoutes.Homechef, icon: <Home /> }],
  },
  {
    name: 'customer',
    route: PageRoutes.Customer,
    children: [
      { route: PageRoutes.Customer, name: 'home', icon: <Home /> },
      { route: PageRoutes.Customer + PageRoutes.Subscribers, name: 'subscribers', icon: <Group /> },
    ],
  },
  {
    name: 'Orders',
    route: PageRoutes.Orders,
    children: [{ name: 'home', route: PageRoutes.Orders, icon: <Home /> }],
  },
  {
    name: 'Sales',
    route: PageRoutes.Sales,
    children: [{ name: 'home', route: PageRoutes.Sales, icon: <Home /> }],
  },
]

export const ApiRoutes = {}
