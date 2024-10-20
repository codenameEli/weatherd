export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-+/, // include all bg classes because of switching depending on weather code
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

