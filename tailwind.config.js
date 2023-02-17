/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#004EA2",
      white: "#ffffff",
      orange: "#FF8A00",
      black: "#262626",
      lightblue: "#2799FF",
    },
    screens: {
      maxlaptop: { max: "1536px" },
      labtop: { max: "1536px", min: "1281px" },
      maxtablet: { max: "1280px" },
      tablet: { max: "1280px", min: "768px" },
      mobile: { max: "767px" },
    },
    extend: {},
  },
  plugins: [],
};
