import React from "react";
import { Link } from "gatsby";
import styled from "styled-components"


const StyledCard = styled.div<{image: string}>`
transition: all 0.5s ease-out;
  background:${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
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
const Card = ({ project }) => {
  return (
    <Link to={`/${project.node.Slug}`}>
      <StyledCard image={project.node.Thumbmail.url} id={project.node.Title}>
        <div> 
            {project.node.Title}
        </div>
      </StyledCard>
    </Link>
  );
};

export default Card;