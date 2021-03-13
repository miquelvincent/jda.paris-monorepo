import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import React from "react"

const StyledHeader = styled.header`
  display: flex;
  padding: 0px 20px 10px; 
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background: antiquewhite;
  img {
    height: 90px;
  }
  a {
    color: black;
    animation: al 1;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Header = () => (
  <StyledHeader>
   <AniLink fade to={`/`}>Réalisations</AniLink>
    <div><img src={`${process.env.GATSBY_ROOT_URL}/logo.png`}/></div>
    <Link to="/agency">Agence</Link>
  </StyledHeader>
)

export default Header
