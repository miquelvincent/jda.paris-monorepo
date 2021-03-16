import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components"
import Menu from "../components/menu"
import { handleOpacity } from "../helpers"
import { Logo } from "../assets/logo"
import { useDimensions } from "react-hook-dimensions"
import { useScroll } from "../hooks/useScroll"
import Slideshow from "../components/slideshow"
import Footer from "../components/footer"
import Layout from "../components/layout";
import Header from "../components/header"
import ProjectsComponent from "../components/projects";
import "../assets/css/main.css";


const StyledHomePage = styled.div`
.grid {
    display: grid;
    max-width: 980px;
    grid-gap: 25px;
    margin: 30px auto;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1024px) {
      margin: 30px 20px;
    }
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      margin: 30px 20px 0;
    }
  }
  .slideshow {
    height: calc(100vh - 100px);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 1024px) {
      height: 100vh;
    }
  }
  .cover {
    position: relative;
    .logo-hp{
  display: none;
  @media (max-width: 1024px) {
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 3;
    top: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    >svg {
      margin-top: 10vh;
    }
  }
  }

}
`

const IndexPage = () => {
  const data = useStaticQuery(query);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const scrollPositon = useScroll()
  const [cover] = useDimensions();
  const [footer] = useDimensions();
  const [projects] = useDimensions();
  const [displayNav, updateDisplay] = useState(0)

  useEffect(() => {
    const positionFooter = footer?.current?.offsetTop - (scrollPositon.scrollYBottom + 300)
    const deltaPositionNav = scrollPositon.scrollY - (cover?.current?.offsetTop + cover?.current?.offsetHeight)
    const position = scrollPositon.scrollY < 1500 ? deltaPositionNav : positionFooter
    const opacity = handleOpacity(position)
    updateDisplay(opacity)
  }, [scrollPositon])

  useEffect(() => {
    if(url.indexOf("projects") > -1) {
      window.scrollTo({ top: projects?.current?.offsetTop, behavior: 'smooth' })
    }else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [url])



  return (
    <StyledHomePage>
       <Header />
      {scrollPositon.scrollY - (cover?.current?.offsetTop + cover?.current?.offsetHeight) > 0 && <Menu opacity={displayNav} />}
      <Layout>
        <div ref={cover} className="cover"><div className="logo-hp" onClick={() => window.scrollTo({ top: projects?.current?.offsetTop, behavior: 'smooth' })}><Logo /></div><Slideshow images={data.strapiHomepage.slideshow} /></div>
        <div ref={projects}><ProjectsComponent projects={data.allStrapiProjects.edges} /></div>
        <div ref={footer}><Footer /></div>
      </Layout>
    </StyledHomePage>
  );
};

const query = graphql`
  query {
    allStrapiProjects(filter: {}) {
      edges {
        node {
          strapiId
          Slug
          Title
          Thumbmail {
            id
            url
          }
        }
      }
    }
    strapiHomepage {
      slideshow {
        url
      }
    }
  }
`;

export default IndexPage;