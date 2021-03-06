require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-transition-link",
   },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [ `article`, `projects`, {
          name: `press`,
          endpoint: `press`,
        },],
        singleTypes: [`homepage`, `global`, `about`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "jda.paris - julien dufresne architecture",
        short_name: "jda",
        start_url: "/",
        icon: `src/images/icon.png`
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_NAME,
        apiKey: process.env.CLOUDINARY_KEY,
        apiSecret: process.env.CLOUDINARY_SECRET,
        resourceType: `image`
      },
    },
    "gatsby-plugin-offline",
  ],
};