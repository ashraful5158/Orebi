/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1600px",
      },
      colors: {
        navColor:"#767676",
        categoryLink:"rgba(255, 255, 255, 0.70)"
      },
      screens: {
        cs: "1600px",
      }
    },
  },
  plugins: [],
};
