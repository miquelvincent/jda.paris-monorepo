import React, { useEffect, useState } from "react";
import { Logo } from "../assets/logo"
import { useWindowSize } from "../hooks/useWindowSize"
import styled from "styled-components"
import { Arrow } from "../assets/arrow"
import { Link, graphql, useStaticQuery } from "gatsby";


const StyledNav = styled.div`
  nav {
    position: fixed;
    max-width: 250px;
    top: 20px;
    left: 20px;
    > ul {
    > li {
    cursor: pointer;
    margin-bottom: 15px;
    line-height: 15px;
  
    &.logo {
      margin-bottom: 15px;
      > a:hover {
      border-bottom: 0px;
    }
    }
    > ul {
      padding-left: 10px;
      height: 0px;
      opacity: 0;
      overflow: hidden;
      transition: all 0.4s;
      &.open {
        opacity: 1;
        height: 100%;
        max-height: 300px; 
      }
      li {
        &:first-child{
          margin-top: 10px;
        }
        &:hover {
          font-weight: 500;
        }
        line-height: 20px;
        a {
          font-size: 14px;
          &:hover {
            border-bottom: 0px;
          }
        }
    
        color: black;
      }
    }
    a, span {
      font-size: 16px;
      color: black;
      border-bottom: 0px solid black;
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
  }
  }
  .backToTop {
    cursor: pointer;
    position: fixed;
    bottom: 100px; 
    right: 60px;
  }
`

const Nav = ({ opacity, footerPosition }: { opacity: number, footerPosition: number }) => {
  const data = useStaticQuery(query);
  const windowSize = useWindowSize()
  const [openProjectsMenu, updateMenu] = useState(false)

  return (
    footerPosition > 3000 ?
    <StyledNav>
      <nav style={{ opacity: opacity, display: opacity > 0 ? 'block' : 'none' }}>
        <ul>
          <li className="logo">
            <Link to="/"><Logo /></Link>
          </li>
          <li>
            <span onClick={() => updateMenu(!openProjectsMenu)}>Réalisations</span>
            <ul className={openProjectsMenu ? 'open' : 'close'}>
              {data.allStrapiProjects.edges.map(item => <li><Link to={`/${item.node.Slug}`}>{item.node.Title}</Link></li>)}
            </ul>
          </li>
          <li>
            <Link to="/agency">Agences</Link>
          </li>
          <li>
            <Link to="/press">Press</Link>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div style={{ opacity, display: opacity > 0 ? 'block' : 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="backToTop"><Arrow /></div>
    </StyledNav> : <span/>
  );
};

const query = graphql`
  query {
    allStrapiProjects {
      edges {
        node {
          id
          Title
          Slug
        }
      }
    }
  }
`;

export default Nav;