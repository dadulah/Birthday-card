/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'cake-layer': `linear-gradient(transparent 50px, #BCECF8 50px, #BCECF8 60px, transparent 60px),
        radial-gradient(circle at 30px 5px, #26C8B9 30px, #8FE7FD 31px)`,
        'candle': `repeating-linear-gradient(45deg, #72B6D8 0, #72B6D8 5px, #D5F0F7 5px, #D5F0F7 10px)`
      }
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
}

