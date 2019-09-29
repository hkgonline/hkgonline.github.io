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
  ],
}
