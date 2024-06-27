/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#F7951C',
        bgray: "#bcc1cf"
      }
    },
  },
  plugins: [],
};
