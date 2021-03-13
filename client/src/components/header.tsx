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
    <AniLink fade to={`/`}>Réalisations</AniLink>
    <div><Logo/></div>
    <Link to="/agency">Agence</Link>
  </StyledHeader>
)

export default Header
