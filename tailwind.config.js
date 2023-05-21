/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#000000',
      'light': '#FFFFFF',
      'custom-gray': '#979797',
      'custom-gray-2': '#242424',
      'custom-blue': '#6098d3',
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}

