/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'unam-blue': '#084877',
        'unam-gold': '#d4af37',
      }
    },
  },
  plugins: [],
}
