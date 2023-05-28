module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      md: "1024px",
    },
    extend: {
      colors: {
        black: "hsl(0, 100%, 0%)",
        white: "hsl(0, 100%, 100%)",
      },
    },
  },
  plugins: [],
};
