import React, { useState, useEffect } from "react";
import { handleOpacity } from "../helpers"
import { useDimensions } from "react-hook-dimensions"
import { useScroll } from "../hooks/useScroll"
import styled from "styled-components"
import Footer from "../components/footer"
import Menu from "../components/menu"
import Layout from "../components/layout";
import Header from "../components/header"
import Cover from "../components/cover"
import "../assets/css/main.css";


const StyledInnerPage = styled.div`
.content {
  max-width: 980px;
  margin: auto;
  >div {
    @media (max-width: 1024px) {
        margin-left: 20px; 
        margin-right: 20px;
    }
    h2 {
    font-size: 20px;
    line-height: 2;
  }
    img {
    width: 100%;
  }
  }
}
`

const innerPage = ({ children, title }) => {
  const scrollPositon = useScroll()
  const [cover] = useDimensions();
  const [footer] = useDimensions();
  const [displayNav, updateDisplay] = useState(0)


  useEffect(() => {
    const positionFooter = footer?.current?.offsetTop - (scrollPositon.scrollYBottom + 300)
    const deltaPositionNav = scrollPositon.scrollY - (cover?.current?.offsetTop + cover?.current?.offsetHeight)
    const position = scrollPositon.scrollY < 1500 ? deltaPositionNav : positionFooter
    const opacity = handleOpacity(position)
    updateDisplay(opacity)
  }, [scrollPositon])

  return (
    <StyledInnerPage>
      <Header />
      <Layout>
        <Menu opacity={displayNav} footerPosition={footer?.current?.offsetTop} />
        <div ref={cover}><Cover title={title} /></div>
        <div className='content'>
          {children}
        </div>
        <div ref={footer}><Footer /></div>
      </Layout>
    </StyledInnerPage>
  );
};



export default innerPage;