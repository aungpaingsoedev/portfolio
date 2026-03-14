/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive'],
        sans: ['"Pixelify Sans"', 'cursive'],
      },
      colors: {
        primary: "#FF7070",
        secondary: "#FF7070",
        background: "#BFD7ED",
        dark: "#334155",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
