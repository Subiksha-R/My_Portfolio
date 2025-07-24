/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPurple: "#7127BA", 
        textHover:"#7840AD",
        textPurple: "#763CAC",       
        lightGray: "#f1f1f1",
      },
    },
  },
  plugins: [],
}