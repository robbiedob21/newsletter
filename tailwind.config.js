/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        'tick' : 'url(./assets/images/icon-list.svg)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

