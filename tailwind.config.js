/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				auto: 'repeat(auto-fit, minmax(200px, 1fr))',
			},
		},
	},
	plugins: [],
}
