import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import { Logo } from "../assets/logo"


const StyledNav = styled.div<{type: "mobile" | "desktop"}>`
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
        font-size: ${props => props.type === "desktop" ? "20px" : "25px"};
        a {
          font-size: ${props => props.type === "desktop" ? "14px" : "20px"};
          line-height: ${props => props.type === "desktop" ? "1" : "1.5"};
          &:hover {
            border-bottom: 0px;
          }
        }
        color: black;
      }
    }
    a, span {
      font-size: ${props => props.type === "desktop" ? "16px" : "22px"};
      line-height: ${props => props.type === "desktop" ? "1" : "2"};
      color: black;
      border-bottom: 0px solid black;
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
  }
  }
`

const Nav = ({ opacity, updateMenu, openProjectsMenu, data, type }) =>
  <StyledNav type={type}>
    <nav style={{ opacity: opacity, display: opacity > 0 ? 'block' : 'none' }}>
      <ul>
        <li className="logo">
          <Link to="/"><Logo /></Link>
        </li>
        <li>
          <span onClick={() => updateMenu(!openProjectsMenu)}>Réalisations</span>
          <ul className={openProjectsMenu ? 'open' : 'close'}>
            {data.allStrapiProjects.edges.map(item => <li key={item.node.Slug}><Link to={`/${item.node.Slug}`}>{item.node.Title}</Link></li>)}
          </ul>
        </li>
        <li>
          <Link to="/agency">Agence</Link>
        </li>
        <li>
          <Link to="/press">Press</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/jdarchitecte/" target="_blank" rel="noreferrer">Instagram</a>
        </li>
        <li>
        <a href="mailto:contact@jda.paris">Contact</a>
        </li>
      </ul>
    </nav>
  </StyledNav>


export default Nav