/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens and up
      md: "768px", // Medium screens and up
      lg: "1024px", // Large screens and up
      xl: "1280px", // Extra large screens and up
    },
    extend: {
      fontFamily: {
				gilroy: ['Gilroy', 'sans-serif'],}
    },
  },
  plugins: [],
};