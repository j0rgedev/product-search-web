/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
