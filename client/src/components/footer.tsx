import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import React from "react"

const StyledFooter = styled.footer`
    margin: 50px 20px;
    border-top: 2px solid black;
    >div {
        display: flex;
  padding: 0px 0px 10px; 
  height: 100px;
  align-items: center;
  justify-content: space-between;
  img {
    height: 90px;
  }
  a {
    color: black;
    transition: 0.5s ease;
    &:hover {
      text-decoration: underline;
      transition: 0.5s ease;
    }
  }
    }
`
const Footer = () => (
    <StyledFooter>
        <div>
            <AniLink fade to={`/`}>Réalisations</AniLink>
            <div><img src={`${process.env.GATSBY_ROOT_URL}/logo.png`}/></div>
            <Link to="/agency">Agence</Link>
        </div>
    </StyledFooter>
)

export default Footer
