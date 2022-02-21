const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      gridTemplateRows: {
        app: "1fr 100px",
        mobile: "1fr 140px",
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
        main: "calc(100% - 10rem)",
      },
      textColor: {
        title: "#2c3e50",
        "custom-green": "#64ffda",
        "custom-dark-green": "#07624b",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              extends: "underline",
              color: "#07624b",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.50"),
            "h1,h2,h3,h4,h5,h6, p": {
              color: theme("colors.gray.50"),
            },
            a: {
              extends: "underline",
              color: "#64ffda",
            },
            strong: {
              color: theme("colors.gray.50"),
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
