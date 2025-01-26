/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'cake-layer': `linear-gradient(transparent 50px, #fedbab 50px, #fedbab 60px, transparent 60px),
        radial-gradient(circle at 30px 5px, #994c10 30px, #fcbf29 31px)`,
        'candle': `repeating-linear-gradient(45deg, #fd3018 0, #fd3018 5px, #ffa89e 5px, #ffa89e 10px)`
      }
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
}

