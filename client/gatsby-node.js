exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
      `
        {
          projects: allStrapiProjects {
            edges {
              node {
                id
                Slug
              }
            }
          }
        }
      `
    );
  
    if (result.errors) {
      throw result.errors;
    }
  
    // Create projects pages.
    const projects = result.data.projects.edges;
    const ProjectTemplate = require.resolve("./src/templates/project.tsx");
    projects.forEach((project, index) => {
      createPage({
        path: `/${project.node.Slug}`,
        component: ProjectTemplate,
        context: {
          slug: project.node.Slug,
        },
      });
    });
  
  };
  
  module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    const crypto = require(`crypto`);
  
    if (node.internal.type === "StrapiProjects") {
      const newNode = {
        id: createNodeId(`StrapiProjectContent-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          content: node.content || " ",
          type: "StrapiProjectContent",
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