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
        'sm': '320px',   // from 320px to 479px
        'md': '480px',   // from 480px to 600px
        'lg': '768px',   // from 768px to 1023px
        '1xl': '1024px', // from 1024px to 1199px
        'xl': '1200px',  // from 1200px to 1399px
        '2xl': '1400px', // from 1400px to 1599px
        '3xl': '1600px', // from 1600px to 1799px
        '4xl': '1800px',  // above 1800px
      }
    },
  },
  plugins: [],
}