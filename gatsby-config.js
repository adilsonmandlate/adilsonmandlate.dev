module.exports = {
  siteMetadata: {
    title: "Adilson Mandlate",
    description: "Adilson Mandlate, front end developer based in Mozambique",
    author: "@adilsonmandlate",
  },

  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("postcss-preset-env")({ stage: 0 })],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adilson Mandlate`,
        short_name: `Adilson`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#c0392b`,
        display: `minimal-ui`,
        icon: `src/images/profile.png`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["EB Garamond\:700", "Inter\:400"],
      },
    },
  ],
};
