import React from "react";
import styled from "styled-components"
import { graphql } from "gatsby";
import Header from "../components/header";
import Markdown from "react-markdown";

const yellow = "rgb(251, 196, 65)"

const StyledProject = styled.div`
.cover {
  margin-bottom: 60px;
  background:${props => `url(${props.imageCover})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 70vh;
  >div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    color: black;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 20px;
    justify-content:center;
    >div {
      background: linear-gradient(to bottom, transparent, antiquewhite);; 
      padding: 30px;
      width: 100%;
    }
  }
}
.gallery {
  width: 100%;
  max-width: 900px;
  margin: auto;
  img {
    margin-bottom: 20px;
  }
}

`

export const query = graphql`
  query ProjectQuery($slug: String!) {
    strapiProjects(Slug: { eq: $slug }) {
      id
      Title
      Description
      Images {
        id
        url
      }
      Thumbmail {
        id
        url
      }
    }
  }
`;

const Project = ({ data }) => {
  const project = data.strapiProjects;
  const seo = {
    metaTitle: project.title,
    shareImage: project.image,
    article: true,
  };

  return (
      <StyledProject imageCover={project.Thumbmail.url}>
        <Header/>
        <div className="cover">
          <div>
            <div>
              <h1>{project.Title}</h1>
              <Markdown source={project.Description} escapeHtml={false} />
            </div>
          </div>
        </div>

        <div className="gallery">
          {project.Images.map((image, index) =>
            <img style={{ width: "100%" }} key={image.id} src={image.url} />
          )}
        </div>
      </StyledProject>
  );
};

export default Project;