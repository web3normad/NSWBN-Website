/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
        100:'#49887b',
        200:'#353535',
        300:'#F2F3F4',
        }
      }
    },
  },
  plugins: [],
}