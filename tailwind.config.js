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
      },
      minHeight: {
        app: "calc(100vh - 50px)",
      },
      height: {
        main: "calc(100% - 10rem)",
      },
      textColor: {
        title: "#2c3e50",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              extends: "underline",
              color: theme("colors.green.500"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.50"),
            "h1,h2,h3,h4,h5,h6, p": {
              color: theme("colors.gray.50"),
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
