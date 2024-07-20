import Breakfast from 'public/breakfast.jpg'
import Dinner from 'public/dinner.jpg'
import Breakfast_Menu from 'public/hc_breakfast.jpg'
import Dinner_Menu from 'public/hc_dinner.jpg'
import Lunch_Menu from 'public/hc_lunch.jpg'
import Lunch from 'public/lunch.jpg'

export const menuItems = [
  { src: Breakfast_Menu, alt: 'breakfast icon', buttonText: 'Upload B-Fast', mealType: 'breakfast' },
  { src: Lunch_Menu, alt: 'lunch icon', buttonText: 'Upload Lunch', mealType: 'lunch' },
  { src: Dinner_Menu, alt: 'dinner icon', buttonText: 'Upload Dinner', mealType: 'dinner' },
]

export const meals = [
  { name: 'B_Fast', image: Breakfast },
  { name: 'Lunch', image: Lunch },
  { name: 'Dinner', image: Dinner },
]
