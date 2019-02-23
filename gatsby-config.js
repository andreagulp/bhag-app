module.exports = {
  siteMetadata: {
    title: `Have We Reached Our 200K BHAG Yet?`,
    description: `Go Go`,
    author: `kaizen`,
    actuals: `5100`,
    bhag: `200000`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "bhag",
        short_name: "bhag",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/bhag.png" // This path is relative to the root of the site.
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
