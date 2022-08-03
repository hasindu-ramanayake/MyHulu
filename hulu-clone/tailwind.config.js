/** @type {import('tailwindcss').Config} */

module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl":"2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
