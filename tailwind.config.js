/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'error': '#EE5454',
        'correct': '#26D782',
        'dark-navy': '#313E51',
        'button': '#A729F5',
        'letter-box': '#F4F6FA',
        'text2': '#626C7F',
        'text-blue': '#ABC1E1',
        'purple-hover': '#F6E7FF',
        'light': {
          main: '#F4F6FA',
          secondary: '#FFF',
          text: '#313E51',
        },
        'dark': {
          main: '#313E51',
          secondary: '#3B4D66',
          text: '#FFF',
        },
      },
      boxShadow: {
        grey: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
      },
      fontFamily: {
        Rubik: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
