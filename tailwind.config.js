/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      keyframes: {
        shake_pokeball: {
          '0%': { transform: 'rotate(0)' },
          '25%': {transform: 'rotate(6deg) translatex(6px)'},
          '50%': {transform: 'rotate(-6deg) translatex(-6px)'},
          '75%': {transform: 'rotate(6deg) translatex(6px)'},
          '100%': { transform: 'rotate(0)'},
        },
        progress: {
          '0%': { width: '0' },
          '100%': { width: '100%'},
        },
        slow_appearence: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        'shake_pokeball': 'shake_pokeball 2s forwards infinite',
        'progress': 'progress 1.5s forwards',
        'slow_appearence': 'slow_appearence 1s forwards',
      },
      //  how to use as class: text-{fontSize} => text-heading-sm
      fontSize: {
        'heading-sm': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '-0.015em',
          fontWeight: 700
        }],
        'heading-md': ['3rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-0.015em',
          fontWeight: 700
        }],
        'heading-lg': ['3.5rem', {
          lineHeight: '4rem',
          letterSpacing: '-0.015em',
          fontWeight: 700
        }],
        'subheading-xs': ['.9rem', {
          lineHeight: '1.2rem',
          letterSpacing: '0',
          fontWeight: 600
        }],
        'subheading-sm': ['1.2rem', {
          lineHeight: '1.6rem',
          letterSpacing: '0',
          fontWeight: 600
        }],
        'subheading-md': ['1.3rem', {
          lineHeight: '1.8rem',
          letterSpacing: '0',
          fontWeight: 600
        }],
        'subheading-lg': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '0',
          fontWeight: 600
        }],
        'body-sm': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.005em',
          fontWeight: 400
        }],
        'body-md': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0',
          fontWeight: 400
        }],
        'body-lg': ['1.125rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.015em',
          fontWeight: 400
        }],
      },
      colors: {
        primary: '#2e2f57',
        secondary: '#9496b2',
        neutral: '#f5fbfb',
        // cards background color from https://pokeapi.co/api/v2/pokemon-color/
        green: '#c4e3d4',
        blue: '#bedcdb',
        brown: '#f0d3bb',
        red: '#eabcb3',
        black: '#d9d9d9',
        gray: '#CBD4d6',
        pink: '#E4BBC8',
        purple: '#D9C5E7',
        white: '#ededed',
        yellow: '#F8F5BD',
        greenLight: '#dff0e7',
        blueLight: '#dbeceb',
        brownLight: '#f7e7da',
        redLight: '#f3dad5',
        blackLight: '#eaeaea',
        grayLight: '#e2e7e8',
        pinkLight: '#f0dae1',
        purpleLight: '#eadff2',
        whiteLight: '#f5f5f5',
        yellowLight: '#fbf9db',
      }
    },
  },
  plugins: [],
}
