const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Josefin Sans', 'sans-serif'],
        handwriting: ['Sacramento', 'cursive'],
      },

      colors: {
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
