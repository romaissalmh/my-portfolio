/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: false,
      }
    } ,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rome.K Portfolio",
        short_name: "Rome.K",
        start_url: "/",
        display: "standalone",
        icon: "static/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      }
    },
    
  ],
}
