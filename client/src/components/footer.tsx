import { Link, useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Logo } from "../assets/logo"
import styled from "styled-components"
import React from "react"

const StyledFooter = styled.footer`
    margin: 50px 20px;
    border-top: 2px solid black;
    @media (max-width: 1024px) {
      margin: 30px 20px 20px;
    }
    >div {
      display: flex;
      padding: 0px 0px 10px; 
      height: 100px;
      align-items: center;
      justify-content: space-between;
    svg {
      height: 90px;
    }
    .title {
      font-weight: 500;
      padding-bottom: 10px;
    }
    .contact {
      font-size: 14px;
    }
    .projects{
      .link{
        &:last-child{
          .separator {
            display:none;
          }
      
          
        }
      }
    }
    a {
      color: black;
      transition: 0.5s ease;
      font-size: 14px;
      &:hover {
        text-decoration: underline;
        transition: 0.5s ease;
      }
    }
    @media (max-width: 1024px) {
      height: 50px;
      justify-content: center;
      padding: 0px 0px 0px;
      margin: 20px 20px;
      .projects {
        display: none; 
      }
      .logo {
        display: none; 
      }
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(query);
  return (
    <StyledFooter>
      <div>
        <div className="projects">
          <div className="title">Réalisations</div>
          {data.allStrapiProjects.edges.map(item => <span className="link"><Link to={`/${item.node.Slug}`}>{item.node.Title}</Link><span className="separator"> | </span></span>)}
        </div>
        <div className="logo"><AniLink fade to={`/`}><Logo /></AniLink></div>
        <div className="contact"><a href="mailto:contact@jda.paris">contact@jda.paris</a> | <a href="tel:0033665500559">+33 6 65 50 05 59</a> | <a href="https://www.instagram.com/jdarchitecte/" target="_blank" rel="noreferrer">Instagram</a></div>
      </div>
    </StyledFooter>
  )
}

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

export default Footer
