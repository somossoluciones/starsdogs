/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primario': {
					100: '#FFF3E0',
					200: '#FFE0B2',
					300: '#FFCC80',
					400: '#FFB74D',
					500: '#FFA726', // Naranja principal
					600: '#FB8C00',
					700: '#F57C00',
					800: '#EF6C00',
					900: '#E65100',
				},
				'secundario': {
					100: '#EFEBE9',
					200: '#D7CCC8',
					300: '#BCAAA4',
					400: '#A1887F',
					500: '#8D6E63', // Marrón principal
					600: '#795548',
					700: '#6D4C41',
					800: '#5D4037',
					900: '#4E342E',
				},
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Montserrat', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
