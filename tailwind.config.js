/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        windsong: ["WindSong"],
        garamond: ["EB Garamond"],
        lovelydream: ["Lovely Dream"],
      },
      colors: {
        "light-pink": "#FFF7F9",
        "pink-red": "#F4486A",
      },
      backgroundImage: {
        heart: "url('/src/assets/heart-bg.jpg')",
        footer: "url('/src/assets/footer.jpg')",
      },
    },
  },
  plugins: [],
};
