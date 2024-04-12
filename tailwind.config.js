/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "first-screen": "url('./img/first-screen.png')",
        "second-screen": "url('./img/second-screen.png')",
        "third-screen": "url('./img/third-screen.jpg')",
        "footer-screen": "url('./img/footer-screen.png')",
      },
    },
  },
  plugins: [],
};
