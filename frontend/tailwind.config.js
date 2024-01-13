module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#e9e9e9",
          300: "#e5e5e5",
          400: "#b5b5b5",
          500: "#9b9b9b",
          "400_01": "#b9b9b9",
          "400_02": "#c8c8c8",
          "200_01": "#efebeb",
        },
        blue_gray: { 100: "#d9d9d9", 400: "#7e939a", 700: "#3e4369" },
        blue: {
          100: "#c4d6ff",
          A700: "#2a58fe",
          A200: "#4a7eef",
          A700_01: "#2a59ff",
        },
        red: { 900: "#700000" },
        light_green: { 900: "#218b00" },
        teal: { 300: "#46a1af" },
        black: { 900: "#000000", "900_cc": "#000000cc" },
        indigo: { 600: "#3b3bb3", A400: "#4f4ae6" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(0deg ,#000000cc,#000000cc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
