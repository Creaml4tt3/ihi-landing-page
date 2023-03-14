/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#004EA2",
      navy: "#002A59",
      cream: "#FFF7F0",
      white: "#ffffff",
      orange: "#FF8A00",
      black: "#262626",
      lightblue: "#2799FF",
    },
    screens: {
      maxlaptop: { max: "1366px" },
      labtop: { max: "1366px", min: "1025px" },
      maxtablet: { max: "1024px" },
      tablet: { max: "1024px", min: "426px" },
      mobile: { max: "425px" },
    },
    fontFamily: {
      libre: ["Libre Franklin", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "1620px": "1620px",
        "1540px": "1540px",
        "1480px": "1480px",
        "1400px": "1400px",
        "1360px": "1360px",
        "1300px": "1300px",
      },
      spacing: {
        desktop: "60px",
        laptop: "40px",
        tablet: "40px",
        mobile: "30px",
        twenty: "20vh",
        fifthteen: "15vh",
      },
      fontSize: {
        "40px": ["40px", "1.375em"],
      },
      padding: {
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "25vh": "25vh",
        "20vh": "20vh",
        "15vh": "15vh",
      },
      margin: {
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "25vh": "25vh",
        "20vh": "20vh",
        "15vh": "15vh",
      },
      boxShadow: {
        yblue: "20px 20px 0px #004EA2",
        soft: "0px 0px 16px rgba(0,0,0,0.25)",
        outline: "0px 0px 0px 2px rgba(0,78,162,1)",
      },
    },
  },
  plugins: [],
};
