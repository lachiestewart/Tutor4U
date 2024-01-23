/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#3E4369",
          secondary: "#2D304C"
        },
        gray: {
          200: "#e9e9e9",
          300: "#e5e5e5",
          400: "#b5b5b5",
          500: "#9b9b9b",
          "400_01": "#c8c8c8",
          "400_02": "#b9b9b9",
          "200_01": "#efebeb",
        },
        blue_gray: { 100: "#d9d9d9", 400: "#7e939a", 700: "#3e4369" },
        red: { 900: "#700000" },
        blue: {
          primary: "#4F4AE6",
          secondary: "#3B3BB3",
          100: "#c4d6ff",
          A700: "#2a58fe",
          A200: "#4a7eef",
          A700_01: "#2a59ff",
        },
        light_green: { 900: "#218b00" },
        teal: { primary: "#46a1af", secondary:"#027688" },
        black: { 900: "#000000", "900_cc": "#000000cc" },
        indigo: { 600: "#3b3bb3", A400: "#4f4ae6" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter"
      },
    },
  },
  plugins: [],
}