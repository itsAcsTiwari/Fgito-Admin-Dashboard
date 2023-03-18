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
				grey: {
					DEFAULT: '#D9D9D9',
					light: 'e8e8e8',
					dark: '828282',
				},
				tint: {
					DEFAULT: '#5089B2AB',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
