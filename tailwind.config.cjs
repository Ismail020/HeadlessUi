/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'retro' : ['"Press Start 2P"', 'cursive'],
      }
    },
  },
  plugins: [],
}