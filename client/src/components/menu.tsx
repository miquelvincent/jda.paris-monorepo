import React, { useEffect, useState, } from "react";
import { useWindowSize } from "../hooks/useWindowSize"
import styled from "styled-components"
import { Arrow } from "../assets/arrow"
import Nav from "../components/nav"
import { graphql, useStaticQuery } from "gatsby";


const StyledMenu = styled.div`
  .backToTop {
    cursor: pointer;
    position: fixed;
    bottom: 100px; 
    right: 60px;
  }
`

const StyledMobilMenu = styled.div<{ open: boolean }>`
    @media (min-width: 1024px) {
        display: none;
    }
    nav{
        margin-top: 30px;
    }
    .menu {
        z-index: 100;
        position: fixed;
        top: 0;
        padding: 20px;
        background: antiquewhite;
        span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;   
        background:black;
        border-radius: 0px; 
        z-index: 3;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
            &:first-child {
                transform-origin: 0% 0%;
            }
            &:nth-child(2) {
                transform-origin: 0% 100%;
            }
        }
        &.open > span {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);
            transform-origin: 1.5px;
            &:nth-child(3) {
                transform: rotate(-45deg) translate(0, -1px);
            }
            &:nth-child(2) {
                opacity: 0;
                transform: rotate(45deg) scale(0.2, 0.2);
            }  
        }   

    }
    .overlay {
        width: 100%;
        height: 100vh;
        z-index: 10;
        background:antiquewhite;
        position: fixed;
        display: ${props => props.open ? "display" : "none"};
    }
    .backToTop {
        cursor: pointer;
        position: fixed;
        bottom: 100px; 
        right: 60px;
    }

`




const Menu = ({ opacity, footerPosition }: { opacity: number, footerPosition?: number }) => {
    const data = useStaticQuery(query);
    const windowSize = useWindowSize()
    const [openProjectsMenu, updateMenu] = useState(false)
    const [menu, openMenu] = useState(false)

    return (
        footerPosition > 3000 && windowSize.width > 1024 ?
            <StyledMenu>
                <Nav opacity={opacity} updateMenu={updateMenu} openProjectsMenu={openProjectsMenu} data={data} type={"desktop"} />
                <div style={{ opacity, display: opacity > 0 ? 'block' : 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="backToTop"><Arrow /></div>
            </StyledMenu> :
            <StyledMobilMenu open={menu}>
                <div className={`menu ${menu ? "open" : "close"}`} onClick={() => openMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="overlay">
                    <Nav opacity={menu ? 1 : 0} updateMenu={updateMenu} openProjectsMenu={openProjectsMenu} data={data} type={"mobile"} />
                </div>
            </StyledMobilMenu>
    );
};

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

export default Menu;