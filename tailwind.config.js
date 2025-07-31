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
        lightPurple: "#763CAC",
        backgroundMenu: '#251C31',
        darkPurple: '#461C90',

      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #763CAC, #461C90)',
      },
      screens: {
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
      }
    },
  },
  plugins: [],
}