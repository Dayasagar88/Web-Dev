/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        deepblue:"#08042c",
        deepblue2:"#181c2e",
        lightblue: "#f4f8ff",
      }
    },
  },
  plugins: [],
}

