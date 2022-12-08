/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))'
      },
    },
  },
  plugins: [],
}
