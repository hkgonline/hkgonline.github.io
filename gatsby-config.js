module.exports = {
  siteMetadata: {
    title: `HKG Online`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {},
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
