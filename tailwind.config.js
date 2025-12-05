const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Biotif", ...fontFamily.sans],
        heading: ["Neuzeit", ...fontFamily.sans],
      },
      flex: {
        1: "1 1 0%",
      },
      gridTemplateRows: {
        app: "1fr 50px",
        mobile: "1fr 50px",
      },
      gridTemplateColumns: {
        project: "repeat(12, 1fr)",
      },
      gridColumn: {
        "project-detail": "3/-1",
        "project-detail-left": "1/8",
      },
      minHeight: {
        app: "calc(100vh - 50px)",
      },
      height: {
        main: "100%",
      },
      colors: {
        "custom-green": "#07624b",
      },
      textColor: {
        title: "#2c3e50",
        "custom-green": "#64ffda",
        "custom-dark-green": "#07624b",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            a: {
              extends: "underline",
              color: "#07624b",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            "h1,h2,h3,h4,h5,h6, p": {
              color: theme("colors.white"),
            },
            a: {
              extends: "underline",
              color: "#64ffda",
            },
            strong: {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
