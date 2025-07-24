/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        preah: ['"Preahvihear"', 'sans-serif'],
        serifText: ['"DM Serif Text"', 'serif'],
        mona: ['"Mona Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      fontSize: {
        'large': '3rem',
      },
      colors: {
        backgroundPurple: "#7127BA", 
        textPurple: "#763CAC",       
        lightGray: "#f1f1f1",
      },
    },
  },
  plugins: [],
}