import React, { useEffect, useState} from "react";
import { graphql } from "gatsby";
import { handleOpacity } from "../helpers"
import { useScroll } from "../hooks/useScroll"
import styled from "styled-components"
import { useDimensions } from "react-hook-dimensions"
import {ProjectsList} from "../components/footer"
import Footer from "../components/footer"
import Menu from "../components/menu";
import Cover from "../components/cover";

const StyledProject = styled.div`
  .projectsList {
    display: none;
    @media (max-width: 1024px) {
      display: block;
      margin: 0 20px;
      border-top: 1px solid black;
      padding-top: 15px;
      >span {
        line-height: 1.5;
      }
    }
  }
`



const StyledGallery = styled.div`
  @media (max-width: 1024px) {
    margin: 0 20px;
  }
  >div {
    width: 100%;
    max-width: 980px;
    margin: auto;

    img {
      margin-bottom: 20px;
      width: 100%;
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

const Project = ({ data }) => {
  const [opacity, updateOpacity] = useState(0)
  const scrollPositon = useScroll()
  const [cover] = useDimensions();
  const [footer] = useDimensions();
  const [displayNav, updateDisplay] = useState(0)
  const project = data.strapiProjects;
  const seo = {
    metaTitle: project.title,
    shareImage: project.image,
    article: true,
  };

  useEffect(() => {
    updateOpacity(1)
  }, [])

  useEffect(() => {
    const positionFooter = footer?.current?.offsetTop - (scrollPositon.scrollYBottom + 300)
    const deltaPositionNav = scrollPositon.scrollY - (cover?.current?.offsetTop + cover?.current?.offsetHeight)
    const position = scrollPositon.scrollY < 1500 ? deltaPositionNav : positionFooter
    let opacity = handleOpacity(position)
    updateDisplay(opacity)
  }, [scrollPositon])

  return (
    <StyledProject style={{opacity, transition: "opacity 1s ease-in"}}>
      <Menu opacity={displayNav} footerPosition={footer?.current?.offsetTop} />
        <div  ref={cover}><Cover img={project.Thumbmail.url} title={project.Title} text={project.Description}/></div>
        <StyledGallery>
          <div>
          {project.Images.map(image =>
            <img key={image.id} src={image.url} />
          )}
          </div>
        </StyledGallery>
        <div className="projectsList"><ProjectsList data={data}/></div>
        <div ref={footer}><Footer /></div>
    </StyledProject>
  );
};

export default Project;