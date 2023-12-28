// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: [
          'Karla',
          'sans-serif'
        ]
      },
      colors: {
        'tim':'#1d1f2e',
        'coffee': {
          50: 'E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744830',

        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
      },
      backgroundImage: {
        urlImg: 'url("../public/img/hi7.jpg")'
      }
    },
  },
  plugins: [],
}

