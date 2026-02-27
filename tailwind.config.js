/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "content/**/*.md",
      "layouts/**/*.html",
      "./themes/pehtheme-hugo/**/*.{html,js}"
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}