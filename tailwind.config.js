module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1500px'
    },
    extend: {
      fontFamily: {
        title: ['SquarePeg', 'cursive'],
        main: ['Nunito', 'sans']
      },
      height: {
        128: '32rem'
      }
    }
  },
  plugins: []
};
