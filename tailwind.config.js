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
      animation:{
        "loop-scroll": "loop-scroll 50s linear infinite",
        },
        keyframes: {
        "loop-scroll": {
        from: {transform: "translateX(0)" },
        to: {transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}

