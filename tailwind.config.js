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
      navy: "#002A59",
      cream: "#FFF7F0",
    },
    screens: {
      maxlabtop: { max: "1440px" },
      labtop: { max: "1440px", min: "1025px" },
      minlabtop: { min: "1025px" },
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
        fifty: "50svh",
        thirtyfive: "35svh",
        twenty: "20svh",
        fifthteen: "15svh",
      },
      fontSize: {
        "40px": ["40px", "1.375em"],
      },
      padding: {
        "50vh": "50svh",
        "40vh": "40svh",
        "35vh": "35svh",
        "30vh": "30svh",
        "25vh": "25svh",
        "20vh": "20svh",
        "15vh": "15svh",
        "10vh": "10svh",
      },
      margin: {
        "50vh": "50svh",
        "40vh": "40svh",
        "35vh": "35svh",
        "30vh": "30svh",
        "25vh": "25svh",
        "20vh": "20svh",
        "15vh": "15svh",
        "10vh": "10svh",
      },
      boxShadow: {
        yblue: "20px 20px 0px #004EA2",
        soft: "0px 0px 16px rgba(0,0,0,0.25)",
        outline: "0px 0px 0px 2px rgba(0,78,162,1)",
        glow: "0px 0px 0px 8px #ffffff",
      },
      height: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
