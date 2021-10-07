module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        maxHeight: 'max-height',
      },
    },
    fontFamily: {
      poppins: ['"Inter"', 'sans-serif'],
    },
    screens: {
      xs: '480px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
