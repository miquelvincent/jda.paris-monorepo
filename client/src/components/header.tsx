import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const StyledHeader = styled.header`
  display: flex;
  padding: 10px 20px; 
  height: 60px;
  align-items: center;
  justify-content: space-between;

`

const Header = () => (
  <StyledHeader>
   <AniLink fade to={`/`}>Réalisations</AniLink>
    <div>Logo</div>
    <Link to="/agency">Agence</Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
