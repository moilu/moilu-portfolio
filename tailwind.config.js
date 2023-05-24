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
    height: {
			"30v": "30vh",
			"60v": "60vh",
		},
    extend: {
      backgroundImage: {
        'first-pattern': "url('./assets/Hero/bg-figure.png')",
        'second-pattern': "url('./assets/SkillsSection/bg-figure.png')",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}

