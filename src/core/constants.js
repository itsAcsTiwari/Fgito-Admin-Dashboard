import Breakfast from 'public/breakfast.jpg'
import Dinner from 'public/dinner.jpg'
import Breakfast_Menu from 'public/hc_breakfast.jpg'
import Dinner_Menu from 'public/hc_dinner.jpg'
import Lunch_Menu from 'public/hc_lunch.jpg'
import Lunch from 'public/lunch.jpg'

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

export const MenuItems = [
  { src: Breakfast_Menu, alt: 'breakfast icon', buttonText: 'Upload B-Fast', mealType: 'breakfast' },
  { src: Lunch_Menu, alt: 'lunch icon', buttonText: 'Upload Lunch', mealType: 'lunch' },
  { src: Dinner_Menu, alt: 'dinner icon', buttonText: 'Upload Dinner', mealType: 'dinner' },
]

export const Meals = [
  { name: 'B_Fast', image: Breakfast },
  { name: 'Lunch', image: Lunch },
  { name: 'Dinner', image: Dinner },
]
