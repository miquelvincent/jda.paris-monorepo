import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectsComponent from "../components/projects";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
        <ProjectsComponent projects={data.allStrapiArticle.edges} />   
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          image {
            childCloudinaryAsset {
              fixed {
                ...CloudinaryAssetFixed
              }
            }
            localFile{
              publicURL
            }
          }
        }
      }
    }
   
  }
`;

export default IndexPage;