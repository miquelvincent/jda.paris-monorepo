import React from "react";
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby";


const StyledNav = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  a {
    color: black
    line-height: 25px;
  }
`



const Nav = ({ opacity }: { opacity: number }) => {
  const data = useStaticQuery(query);

  return (
    <StyledNav style={{opacity, display:opacity > 0 ? 'block' : 'none' }}>
      <nav>
        <ul>
          <li>
            <img src={`${process.env.GATSBY_ROOT_URL}/logo.png`} />
          </li>
          <li>
            <Link to="/">Réalisations</Link>
          </li>
          <li>
            <Link to="/">Agences</Link>
          </li>
          <li>
            <Link to="/">Agences</Link>
          </li>
          <li>
            Instagram
              </li>
          <li>
            Contact
        </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

const query = graphql`
  query {
    allStrapiProjects {
      edges {
        node {
          id
          Title
        }
      }
    }
  }
`;

export default Nav;