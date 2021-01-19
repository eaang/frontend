const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        xl: '2rem',
      },
      colors: {
        purple: {
          ...colors.violet,
          500: '#813C99',
          800: '#5F0080',
        },
      },
      height: (theme) => ({
        forty: '40%',
        half: '50%',
        'screen/25': '25vh',
        'screen/50': '50vh',
        'screen/75': '75vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
      width: (theme) => ({
        forty: '40%',
        half: '50%',
        'screen/25': '25vw',
        'screen/50': '50vw',
        'screen/75': '75vw',
        'screen/3': 'calc(100vw / 3)',
        'screen/4': 'calc(100vw / 4)',
        'screen/5': 'calc(100vw / 5)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
