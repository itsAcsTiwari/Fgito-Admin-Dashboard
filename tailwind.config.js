/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3BA738',
          100: '#b1dcaf',
          200: '#89ca88',
          300: '#62b960',
          400: '#3BA738',
          500: '#2F862D',
          600: '#236422',
          700: '#184316',
        },
        secondary: {
          DEFAULT: '#ffde59',
          500: '#FFA800',
        },
        tertiary: {
          DEFAULT: '#E33924',
        },
        grey: {
          DEFAULT: '#F0F0F0',
          300: '#c8c8c8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
