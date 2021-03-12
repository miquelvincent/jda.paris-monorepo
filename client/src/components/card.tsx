import React from "react";
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const yellow = "rgb(251, 196, 65)"

const StyledCard = styled.div`
transition: all 0.5s ease-out;
  background:${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  div {
    box-sizing: border-box;
    transition: opacity 0.5s;
    opacity: 0;
    height: 100%;
    width: 100%;
    padding: 20px;
    background: linear-gradient(to bottom, transparent, rgb(251, 196, 65));
    display: flex;
    align-items: flex-end;
    color: black;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 20px;
    justify-content: flex-start;
    &:hover {
      opacity: 1;
    }
  }
`

//** Check this  link to use images from cloudinary : https://www.npmjs.com/package/gatsby-source-cloudinary */
const Card = ({ project }) => {
  return (
    <AniLink paintDrip to={`/project/${project.node.Slug}`} hex="#ffcc33">
      <StyledCard image={project.node.Thumbmail.url}>
        <div> 
            {project.node.Title}
       
        </div>
      </StyledCard>
    </AniLink>
  );
};

export default Card;