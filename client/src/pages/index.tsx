import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectsComponent from "../components/projects";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
        <ProjectsComponent projects={data.allStrapiProjects.edges} />   
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiProjects(filter: {}) {
      edges {
        node {
          strapiId
          Slug
          Title
          Thumbmail {
            id
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;