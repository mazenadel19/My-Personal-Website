module.exports = {
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://mazenadel19.vercel.app/`,
  },
  plugins: [
  `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-ZNP2T1GXDP"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://mazenadel19.vercel.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Mazen Emam", // Used in manifest.json
          shortName: "Mazen Emam", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
      },
    },
  ],
};
