/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      caveat: ["Caveat", "sans-serif"],
      catamaran: ["Catamaran", "sans-serif"],
      cormorant: ["Cormorant", "sans-serif"],
    },
    extend: {
      colors: {
        adora: "#f6ebe7",
      },
      height: {
        192: "48rem",
        128: "32rem",
        160: "40rem",
      },
      screens: {
        xs: "414px",
      },
    },
  },
  plugins: [],
};
