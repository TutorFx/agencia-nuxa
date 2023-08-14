/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'docs/content/**/*.md'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans].join(','),
    },
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      keyframes: {
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          'to': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        skeleton: 'skeleton-loading 2.0s ease-in-out infinite',
      },
      backgroundImage: (theme: any) => ({
        'skeleton-gradient': `linear-gradient(45deg, ${colors.stone[950]}, ${colors.stone[900]}, ${colors.stone[800]}, ${colors.stone[900]}, ${colors.stone[950]})`,
        'gradient': `linear-gradient(to bottom, #5B8DEF, #0063F7)`,
      }),
      backgroundSize: {
        '400': '400% 100%',
      },
      boxShadow: {
        'sharp': '0 0 0 10px rgba(0, 0, 0, .50)',
      },
      colors: {
        'brand-primary': {
          DEFAULT: '#000000',
        },
        'brand-secondary': {
          DEFAULT: '#1C1B1B',
        },
        'background': {
          'light': '#fff',
          DEFAULT: '#000000',
          400: '#1D1D1D',
          300: '#282828'
        },
        'nuxa': {
          DEFAULT: '#F42272',
          50: '#FDD1E2',
          100: '#FCBDD5',
          200: '#FA97BC',
          300: '#F870A4',
          400: '#F6498B',
          500: '#F42272',
          600: '#D30B57',
          700: '#9E0841',
          800: '#68052B',
          900: '#330315',
          950: '#18010A'
        },
        'content': {
          DEFAULT: '#000000'
        },
        'danger': {
          DEFAULT: '#EB5757'
        },
        'warning': {
          DEFAULT: '#E2B93B'
        },
        'success': {
          DEFAULT: '#27AE60'
        },
        'info': {
          DEFAULT: '#2F80ED'
        },
      },
    },
  },
}