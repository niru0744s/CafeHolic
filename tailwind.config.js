/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c89b7b",
        "bg-wood": "#2b1d16"
      }
    }
  },
  plugins: []
}
