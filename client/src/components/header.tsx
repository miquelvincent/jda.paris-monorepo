import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import {Logo} from "../assets/logo"
import React from "react"

const StyledHeader = styled.header`
  display: flex;
  padding: 0px 20px 10px; 
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background: antiquewhite;
  @media (max-width: 1024px) {
    position: absolute;
    background: transparent;
    padding: 0 0 0 0; 
    width: 100%;
    z-index: 100;
    justify-content: center;
    margin: 20px auto;
    a {
      display: none;

    }
  }
  svg {
    height: 110px;
  }
  a {
    color: black;
    animation: all 1s;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Header = () => (
  <StyledHeader>
    <Link to={`/`}>Réalisations</Link>
    <div><Logo/></div>
    <Link to="/agency">Agence</Link>
  </StyledHeader>
)

export default Header
