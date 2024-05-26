const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  fontFamily: {
    sans: 'Raleway',
    content: fontFamily.sans,
    heading: fontFamily.sans,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 1024px)',
    lg: '(min-width: 1200px)',
  },
  theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				lightBg: '#ffffff',
				lightTxt: '#000000',
				white: '#ffffff',
				black: '#000000',
				primary: {
					50: '#f7f2fc',
					100: '#f3ebfc',
					200: '#dccbf7',
					300: '#c4aef2',
					400: '#8774e8',
					500: '#4240dd',
					600: '#3634c7',
					700: '#2724a6',
					800: '#181785',
					900: '#0e0d63',
					950: '#060540'
				},
				secondary: {
					50: '#edf3f7',
					100: '#dae5ed',
					200: '#a7bfd4',
					300: '#7d99ba',
					400: '#385485',
					500: '#0e1f51',
					600: '#0b1a4a',
					700: '#08133d',
					800: '#050e30',
					900: '#030924',
					950: '#010517'
				},
				tertiary: {
					50: '#fff7fb',
					100: '#ffedf6',
					200: '#ffd6e9',
					300: '#ffbdd6',
					400: '#ff8aa7',
					500: '#ff5669',
					600: '#e6475a',
					700: '#bf303e',
					800: '#991f2b',
					900: '#731119',
					950: '#4a070d'
				},
				neutral: {
					50: '#ffffff',
					100: '#ffffff',
					200: '#fcfcfc',
					300: '#fcfcfc',
					400: '#fafafa',
					500: '#f7f7f7',
					600: '#dec8c8',
					700: '#ba8c8c',
					800: '#945959',
					900: '#703232',
					950: '#471515'
				}
			},
			spacing: {
				128: '32rem'
			}
		}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
