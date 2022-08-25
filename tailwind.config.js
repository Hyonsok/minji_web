module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "media",
  theme: {
    maxWidth: { "1/2": "50%", "1/3": "33%", "1/4": "25%", "1/10": "10%" },
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {
      fontFamily: {
        ibm: "'IBM Plex Sans KR', sans-serif",
        sun: "'Sunflower', sans-serif",
        dod: "'Gowun Dodum', sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
