module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
		{
    "resolve": "gatsby-plugin-excerpts",
    "options": {
        "sources": {
            "snippetBlocks": {
                "type": "htmlQuery",
                "sourceField": "html",
                "excerptSelector": ".custom-block.snippet .custom-block-body",
                "stripSelector": "a",
                "elementReplacements": [
                    {
                        "selector": "h6",
                        "replaceWith": "strong"
                    },
                    {
                        "selector": "h5",
                        "replaceWith": "h6"
                    },
                    {
                        "selector": "h4",
                        "replaceWith": "h5"
                    },
                    {
                        "selector": "h3",
                        "replaceWith": "h4"
                    },
                    {
                        "selector": "h2",
                        "replaceWith": "h3"
                    },
                ],
            },
            "default": {
                "type": "htmlQuery",
                "sourceField": "html",
                "excerptSelector": "html > *",
                "ignoreSelector": "img, .gatsby-highlight",
                "stripSelector": "a",
                "elementReplacements": [
                    {
                        "selector": "h6",
                        "replaceWith": "strong"
                    },
                    {
                        "selector": "h5",
                        "replaceWith": "h6"
                    },
                    {
                        "selector": "h4",
                        "replaceWith": "h5"
                    },
                    {
                        "selector": "h3",
                        "replaceWith": "h4"
                    },
                    {
                        "selector": "h2",
                        "replaceWith": "h3"
                    },
                ],
                "truncate": {
                    "length": 80,
                    "byWords": true,
                    "ellipsis": "…"
                },
            }
        },
        "sourceSets": {
            "markdownHtml": [
                "snippetBlocks",
                "default"
            ]
        },
        "excerpts": {
            "snippet": {
                "type": "html",
                "nodeTypeSourceSet": {
                    "MarkdownRemark": "markdownHtml"
                }
            }
        }
    },
}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
