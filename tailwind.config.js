/** @type {import('tailwindcss').Config} */

export default {
   content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
   theme: {
      extend: {
         colors: {
            green: {
               DEFAULT: '#089e5f',
               50: '#ecfdf3',
               100: '#d2f9e1',
               200: '#a8f2c8',
               300: '#70e5aa',
               400: '#37d087',
               500: '#13b66e',
               600: '#089e5f',
               700: '#06764a',
               800: '#085d3c',
               900: '#074d32',
               950: '#032b1e'
            },
            black: {
               DEFAULT: '#020105'
            },
            grey: {
               header: '#353437',
               hero: '#F7F4F2',
               product: '#F2F2FA',
               DEFAULT: '#F5F5F7',
               0: '#EBEBEB',
               1: '#9A999B',
               2: '#5D5D5F',
               3: '#C2C2C3',
               4: '#727474'
            },
            orange: {
               DEFAULT: '#F2994A'
            }
         },
         fontFamily: {
            inherit: 'inherit',
            golos: ['Golos Text', 'sans-serif']
         }
      }
   },
   plugins: []
};
