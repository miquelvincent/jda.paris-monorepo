import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, useStaticQuery, graphql } from "gatsby";
import Seo from "./seo";

const Layout = ({ children }) => {

  const data = useStaticQuery(query);
  return ( 
      <>
        <Seo seo={data.strapiHomepage.seo} />
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