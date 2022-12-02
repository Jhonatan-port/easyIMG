/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-padrao': "url('./background.jpg')"
      }
    },
  },
  plugins: [],
}
