/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001F54', // InnBucks-style deep navy
          light: '#163A6F',
          dark: '#001337',
        },
        accent: {
          DEFAULT: '#F7B500', // gold accent
          dark: '#D99A00',
        },
        background: {
          DEFAULT: '#F4F6FB', // light grey/blue background
        },
      },
    },
  },
  plugins: [],
};
