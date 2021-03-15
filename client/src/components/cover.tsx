import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components"
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

const query = graphql`
query {
    strapiHomepage {
      slideshow {
        url
      }
    }
  }
`;

function Cover({img, text, title}: {img?: string, text?:string, title: string}) {
  const [imgCover, updateImg] = useState(img)
  const data = useStaticQuery(query);
  useEffect(() => {
    if(!imgCover && data){
      const allImgs = data.strapiHomepage.slideshow
      const img = allImgs[Math.floor(Math.random() * allImgs.length)]
      updateImg(img.url)
    }
  }, [imgCover])
    return (
        <StyledCover imageCover={imgCover}>
        <div>
          <div>
            <h1>{title}</h1>
            {text && <Markdown source={text} escapeHtml={false} />}
          </div>
        </div>
      </StyledCover>
    );
}

export default Cover;