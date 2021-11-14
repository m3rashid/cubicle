module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': '1fr 1fr 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
