/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./assets/**/*.html","./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
      },
      colors: {
        primary: '#171717',
      },
    },
  },
  plugins: [],
}

