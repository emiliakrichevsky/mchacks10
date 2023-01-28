/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'maxgreen': '#608b47',
      'bud-green': '#89b153',
      'android-green': '#a7c957',
      'yellow-green': '#cdd993',
      'eggshell': '#f2e8cf',
      'pale-purple': '#e6d4e7',
      'mauve': '#dabfff',
      'lavender': '#b59deb',
      'med-purple': '#907ad6',
      'berry-purple': '#583abb',
    },
  },
  plugins: [],
};
