/* eslint-disable prettier/prettier */
module.exports = {
   future: {
     removeDeprecatedGapUtilities: true
   },
   purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
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
      green: {
        light: '#4caf50'
      },
      red: {
        primary: '#ed4956',
        secondary: '#db3236',
        light: '#FECACA'

      },
      orange: {
        base: '#f32c2c',
        secondary: '#b30606'
      }
    }
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