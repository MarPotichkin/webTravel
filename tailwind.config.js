/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {backgroundImage: {
      'sanFranciscoDesktop': "url('sanFranciscoDesktop.jpg')"
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor:{
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }
  },
  fontFamily:{
    Montserrat: ['Montserrat', 'sans-serif']},
  },
  plugins: [],
}
