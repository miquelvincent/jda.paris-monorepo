import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./seo";
import Header from "./header"



const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  return ( 
      <>
        <Seo seo={data.strapiHomepage.seo} />
        <Header />
        <main>{children}</main>
      </>
)};

const query = graphql`
  query {
    strapiHomepage {
      seo {
        metaTitle
        metaDescription
        shareImage {  
          url
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;