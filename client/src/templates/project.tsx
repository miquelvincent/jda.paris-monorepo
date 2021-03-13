import React, { useEffect, useState} from "react";
import styled from "styled-components"
import { graphql } from "gatsby";
import { handleOpacity } from "../helpers"
import { useScroll } from "../hooks/useScroll"
import { useDimensions } from "react-hook-dimensions"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "react-markdown";


const StyledCover = styled.div<{ imageCover: string }>`
  margin-bottom: 60px;
  background:${({ imageCover }) => `url(${imageCover})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 70vh;
  width: 100%;
  @media (max-width: 1024px) {
    height: 50vh;
  }
  >div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    color: black;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 20px;
    justify-content:center;
    >div {
      background: linear-gradient(to bottom, transparent, antiquewhite);
      padding: 30px;
      width: 100%;
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
    <div style={{opacity, transition: "opacity 1s ease-in"}}>
      <Nav opacity={displayNav} footerPosition={footer?.current?.offsetTop} />
        <StyledCover imageCover={project.Thumbmail.url} ref={cover}>
          <div>
            <div>
              <h1>{project.Title}</h1>
              <Markdown source={project.Description} escapeHtml={false} />
            </div>
          </div>
        </StyledCover>
        <StyledGallery>
          <div>
          {project.Images.map(image =>
            <img key={image.id} src={image.url} />
          )}
          </div>
        </StyledGallery>
        <div ref={footer}><Footer /></div>
    </div>
  );
};

export default Project;