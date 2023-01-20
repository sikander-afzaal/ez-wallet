const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        plusBg:
          "linear-gradient(91.09deg, rgba(122, 53, 232, 0.2) 0%, rgba(192, 45, 240, 0.2) 101.52%)",
        main: 'url("/bg.png")',
        darkGr:
          " linear-gradient(108.05deg, rgba(57, 26, 140, 0.5) 1.28%, rgba(40, 19, 99, 0.5) 100%)",
        purpleGr: "linear-gradient(91.09deg, #7A35E8 0%, #C02DF0 101.52%)",
        overlayGr:
          "linear-gradient(116.56deg, rgba(72, 15, 84, 0.5) -0.69%, rgba(46, 22, 77, 0.5) 101.21%)",
      },
      fontFamily: {
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: "#B7B7B7",
        input: "rgba(0, 0, 0, 0.27)",
        purple: "#281363",
        green: "#009A3D",
      },
      screens: {
        mid: "1400px",
      },
    },
  },
  plugins: [],
};
