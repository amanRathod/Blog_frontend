/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
// const tailwindcss = require('tailwindcss')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
   content: ['./src/**/*.js', './src/**/**/*.js']
 },
 darkMode: 'class',
 theme: {
   fill: (theme) => ({
     red: theme('colors.red.primary')
   }),
   colors: {
     indigo: {
       light: '#3949ab',
       DEFAULT: '#5c6ac4',
       dark: '#303f9f',
     },
     white: '#ffffff',
     blue: {
       medium: '#005c98'
     },
     black: {
       left: '#17191ad0',
       right: '#352d2d',
       borders: '',
       base: '#414141',
       dark: '#222831'

     },
     gray: {
       base: '#616161',
       background: '#FDFAF6',
       primary: '#dbdbdb',
       borderbg:'#6b6363',
       formbg: '#362525',
     },
     yellow: {
       base: '#fbc02d',
       primary: '#ffff8d'
     },
     green: {
       light: '#4caf50',
       primary: '#c8e6c9',
       base: '#388e3c',
     },
     red: {
       primary: '#ed4956',
       secondary: '#db3236',
       light: '#FECACA'

     },
     orange: {
       base: '#f32c2c',
       secondary: '#b30606'
     },
     darkMode: {
       base: '#121212',
       primary: '#272727',
       orange: '#ffab91'
     }
   },
 },
 variants: {
   extend: {
     padding: ['hover'],
     maxHeight: ['focus'],
     backgroundColor: ['active'],
     display: ['group-hover'],
     visibility: ['hover', 'focus'],
     divideColor: ['group-hover'],
     
   }
 },
};