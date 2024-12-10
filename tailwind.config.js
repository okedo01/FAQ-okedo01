/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(273, 75%, 66%)',
        secondary: 'hsl(14, 88%, 65%)',
        tertiary: 'hsl(238, 29%, 16%)',
        quaternary: ' hsl(240, 73%, 65%)',
        quinary: 'hsl(237, 12%, 33%)',
        dark: 'hsl(240, 6%, 50%)',
        light: 'hsl(240, 5%, 91%)',
        a: 'hsl(228, 45%, 44%)'
      },
      maxWidth: {
        bodyWidth: '1000px'
      },
      height: {
        imgheight: '600px'
      },
      fontSize: {
        mobile: '15px',
        desktop: '12px'
      }
    },
  },
  plugins: [],
}

