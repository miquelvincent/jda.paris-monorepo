import React, { useEffect, useState, useLayoutEffect} from "react";
import PropTypes from "prop-types";
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./seo";
import Header from "./header"
import Nav from "./nav"


const StyledLayout = styled.div`
  transition: opacity 1s ease-in;
  .grid {
    display: grid;
    max-width: 980px;
    grid-gap: 25px;
    margin: 30px auto;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      margin: 30px 20px 0;
    }
}
`

const Layout = ({ children }) => {
  const [opacity, updateOpacity] = useState(0)
  const data = useStaticQuery(query);

  useLayoutEffect(()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
    updateOpacity(1)
  },[])
  return (
    <StyledLayout style={{opacity}}>
      <Seo seo={data.strapiHomepage.seo} />
      <Header />
      <main>{children}</main>
    </StyledLayout>
  )
};

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