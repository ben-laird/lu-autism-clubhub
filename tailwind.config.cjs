/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
      },
      colors: {
        "au-blue": {
          100: "#e6fbff",
          200: "#9fd4df",
          300: "#67b1bf",
          400: "#3f8f9f",
          500: "#247080",
          600: "#145360",
          700: "#0a3740",
          800: "#041b20",
          900: "#000000",
        },
        "au-yellow": {
          100: "#ffc619",
          200: "#f2bf13",
          300: "#e6b70d",
          400: "#d9b008",
          500: "#cca705",
          600: "#bf9e02",
          700: "#b39401",
          800: "#a68a00",
          900: "#998000",
        },
        "au-pink": {
          100: "#ffcccc",
          200: "#f5a2a2",
          300: "#ec7d7d",
          400: "#e25f5f",
          500: "#d94949",
          600: "#cf3a3a",
          700: "#c62f2f",
          800: "#bc2828",
          900: "#b32424",
        },
        "au-brown": {
          100: "#fff6ed",
          200: "#e2c7ac",
          300: "#c59d76",
          400: "#a87b4e",
          500: "#8b5f33",
          600: "#6e4720",
          700: "#513214",
          800: "#34200b",
          900: "#170e05",
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
