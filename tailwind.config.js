module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      gridTemplateRows: {
        app: "1fr 50px",
      },
      minHeight: {
        app: "calc(100vh - 50px)",
      },
      textColor: {
        title: "#2c3e50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
