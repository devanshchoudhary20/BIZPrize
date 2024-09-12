/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-purple': '#4B00A9',
        'my-blue': '#0131A0',
        'my-red': '#FF071F',
        'my-indigo': '#4B00A9',

      },
    },
  },
  plugins: [],
}
