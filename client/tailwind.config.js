/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2.4rem',
    },
    debugScreens: {
      position: ['bottom', 'left'],
      selector: '.debug-screens',
      style: {
        backgroundColor: 'black',
        color: 'white',
      },
    },
    screens: {
      xxsm: '320px',
      xsm: '425px',
      mobile: '425px',
      sm: '640px',
      tablet: '640px',
      md: '768px',
      lg: '1024px',
      laptop: '1024px',
      xl: '1280px',
      desktop: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      }, //end of fontFamily
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}