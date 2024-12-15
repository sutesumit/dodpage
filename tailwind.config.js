/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:  {
        title: ['Cascadia Mono', 'Courier New'],
        of_title: ['Monotype Corsiva', 'Lucida Calligraphy Italic'],
        default: ['Miriam Libre']
      },
      colors: {
        'arc_blue' :  '#031ce3'
      }
    },
  },
  plugins: [],
}

