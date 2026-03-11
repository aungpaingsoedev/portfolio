/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0074B7",
        secondary: "#60A3D9",
        background: "#BFD7ED",
        dark: "#334155",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
