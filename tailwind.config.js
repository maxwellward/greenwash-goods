/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        cardo: ["Cardo", "serif"],
      },
      colors: {
        type: {
          primary: "#111111",
          secondary: "#636363",
        },
        background: {
          secondary: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
