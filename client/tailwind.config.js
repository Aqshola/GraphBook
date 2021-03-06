module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        maxHeight: 'max-height',
      },
      screens: {
        xs: '480px',
      },
    },
    fontFamily: {
      poppins: ['"Inter"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
