import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import InnerPage from "../templates/innerPage"
import styled from "styled-components"


const StyledPress = styled.div`
  .press {
    >div{
      margin-bottom: 45px;
    }
    @media (max-width: 1024px) {
      margin-bottom: 40px;
    }
    h2 {
    font-size: 20px;
    line-height: 2;
  }
    img {
    width: 100%;
  }
}
`

const PressPage = () => {
  const press = useStaticQuery(query).allStrapiPress.edges;
  return (
    <StyledPress>
      <InnerPage title="Press">
          <div className="press">{press.map(item => <div key={item.node.id}><img src={item.node.Images[0].url} alt=""/><h2>{item.node.Title}</h2></div>)}</div>
      </InnerPage>
    </StyledPress>
  );
};


const query = graphql`
  query {
    allStrapiPress {
      edges {
        node {
          id
          Title
          Images {
            id
            url
          }
        }
      }
    }
  }
`;

export default PressPage;