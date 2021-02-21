exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
      `
        {
          articles: allStrapiArticle {
            edges {
              node {
                strapiId
                slug
              }
            }
          }
          categories: allStrapiCategory {
            edges {
              node {
                strapiId
                slug
              }
            }
          }
        }
      `
    );
  
    if (result.errors) {
      throw result.errors;
    }
  
    // Create blog articles pages.
    const articles = result.data.articles.edges;
    const ArticleTemplate = require.resolve("./src/templates/article.tsx");
    articles.forEach((article, index) => {
      createPage({
        path: `/article/${article.node.slug}`,
        component: ArticleTemplate,
        context: {
          slug: article.node.slug,
        },
      });
    });
  
    // Create blog catehories pages.
    const categories = result.data.categories.edges;
    const CategoryTemplate = require.resolve("./src/templates/category.tsx");
    categories.forEach((category, index) => {
      createPage({
        path: `/category/${category.node.slug}`,
        component: CategoryTemplate,
        context: {
          slug: category.node.slug,
        },
      });
    });
  };
  
  module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    const crypto = require(`crypto`);
  
    if (node.internal.type === "StrapiArticle") {
      const newNode = {
        id: createNodeId(`StrapiArticleContent-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          content: node.content || " ",
          type: "StrapiArticleContent",
          mediaType: "text/markdown",
          contentDigest: crypto
            .createHash("md5")
            .update(node.content || " ")
            .digest("hex"),
        },
      };
      actions.createNode(newNode);
      actions.createParentChildLink({
        parent: node,
        child: newNode,
      });
    }
  };