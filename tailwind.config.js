/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Primary-Very-Dark-Magenta': 'hsl(300, 43%, 22%)',
        'Primary-Soft-Pink' : 'hsl(333, 80%, 67%)',
        'Neutral-Dark-Grayish-Magenta': 'hsl(303, 10%, 53%)',
        'Neutral-Light-Grayish-Magenta': 'hsl(300, 24%, 96%)',
        'Neutral-White': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'League-Spartan': ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}

