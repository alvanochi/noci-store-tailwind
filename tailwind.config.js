/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        itim: ["Itim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
