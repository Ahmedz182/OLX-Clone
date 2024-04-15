/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {


      'lg': { 'min': '1024' },

      'md': {
        'max': '1023px'
      },
      's-md': {
        'max': '749px'
      },
      'sm': { 'max': '479px' },

    }, colors: {
      'primary': '#002e33',
      'accient': '#1fc4bb',
      'text': '#212121',
      'bg-text': '#c8f7f6',
      'grey': '#ebeff0',
    },
    extend: {},
  },
  plugins: [],
}

