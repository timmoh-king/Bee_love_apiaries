/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        black:"#000000",
        white:"#FFFFFF",
        darkText:"#54555E",
        brightRed:"#F25F3A",
        darkBlue:"#24294A"
      }
    },
  },
  plugins: [],
}

