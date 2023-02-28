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
      maxlaptop: { max: "1536px" },
      labtop: { max: "1536px", min: "1281px" },
      maxtablet: { max: "1280px" },
      tablet: { max: "1280px", min: "768px" },
      mobile: { max: "767px" },
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
        tablet: "30px",
        mobile: "20px",
        onefifth: "20vh",
      },
      fontSize: {
        "40px": ["40px", "1.375em"],
      },
      padding: {
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "15vh": "15vh",
      },
      margin: {
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "15vh": "15vh",
      },
      boxShadow: {
        yblue: "20px 20px 0px #004EA2",
        soft: "0px 0px 16px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
