import React, {useState, useEffect} from "react";
import { graphql, useStaticQuery } from "gatsby";
import Nav from "../components/nav"
import {handleOpacity} from "../helpers"
import { useDimensions } from "react-hook-dimensions"
import { useScroll } from "../hooks/useScroll"
import Slideshow from "../components/slideshow"
import Footer from "../components/footer"
import Layout from "../components/layout";
import ProjectsComponent from "../components/projects";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);
  const scrollPositon = useScroll()
  const [cover] = useDimensions();
  const [footer] = useDimensions();
  const [displayNav, updateDisplay] = useState(0)

  useEffect(() => {
    const positionFooter = footer?.current?.offsetTop - (scrollPositon.scrollYBottom + 300)
    const deltaPositionNav = scrollPositon.scrollY - (cover?.current?.offsetTop + cover?.current?.offsetHeight)
    const position = scrollPositon.scrollY < 1500 ? deltaPositionNav : positionFooter
    const opacity = handleOpacity(position)
    console.log(positionFooter, deltaPositionNav)
    updateDisplay(opacity)
  }, [scrollPositon])


  return (
    <Layout>
        <div ref={cover} className="cover"><Slideshow images={data.strapiHomepage.slideshow} /></div>
        <Nav opacity={displayNav} />
        <ProjectsComponent projects={data.allStrapiProjects.edges} />
        <div ref={footer}><Footer/></div>
    </Layout>
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