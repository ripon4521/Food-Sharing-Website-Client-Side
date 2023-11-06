/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'popins':[  'Poppins', 'sans-serif'],
        'ranacho': ['Rancho', 'cursive'],
        'roboto': ['Roboto',' sans-serif']
      }
    },
  },
  plugins: [],
}

