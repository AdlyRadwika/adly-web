/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['SF Pro Display'],
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

