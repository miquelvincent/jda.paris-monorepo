import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useScroll } from "../hooks/useScroll"
import Slideshow from "../components/slideshow"
import Footer from "../components/footer"
import Layout from "../components/layout";
import ProjectsComponent from "../components/projects";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout>
        <Slideshow images={data.strapiHomepage.slideshow} />
        <ProjectsComponent projects={data.allStrapiProjects.edges} />
        <Footer/>
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
    strapiHomepage {
      slideshow {
        url
      }
    }
  }
`;

export default IndexPage;