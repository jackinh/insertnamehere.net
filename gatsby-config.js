require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `insert_name_here`,
    description: `Custom clothing company and brand.`,
    author: `@insert_jack_here`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },*/
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `insert_name_here`,
        short_name: `inh2020`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/inh-icon.svg`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-emotion`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
