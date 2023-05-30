/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'left-bottom-30': 'left bottom 30%',
    },
    colors: {
      'dark': '#000000',
      'light': '#FFFFFF',
      'custom-gray': '#979797',
      'custom-gray-2': '#242424',
      'custom-blue': '#6098d3',
      'transparent': 'transparent',
    },
    extend: {
      visibility: ["group-hover"],
      backgroundImage: {
        'left-pattern': "url('./assets/ovals-pattern.svg')",
        'right-pattern': "url('./assets/ovals-pattern-2.svg')",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
    },
    height: {
			"30v": "30vh",
			"50v": "50vh",
		},
  },
  plugins: [],
}

