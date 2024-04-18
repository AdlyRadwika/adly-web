/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif'],
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

