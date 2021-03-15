import React from "react";
import InnerPage from "../templates/innerPage"
import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components"


const StyledAgencyPage = styled.div`
 .gridMembre {
    display: grid;
    grid-gap: 25px;
    margin: 30px auto;
    img {
      height: 100%;
    }
    p {
      line-height: 2;
      font-size: 20px;
    }
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      margin: 30px 20px 40px;
      grid-gap: 45px;
      margin-bottom: 60px;
    }
 }
`

const AgencyPage = () => {
  const about = useStaticQuery(query).strapiAbout;
  return (
    <StyledAgencyPage>
    <InnerPage title="Agence">
        <div className="gridMembre">
        {about.Membre.map(item => <div className="membre" key={item.Image.id}><img src={item.Image.url} /><p>{item.Name}</p></div>)}
        </div>
    </InnerPage>
  </StyledAgencyPage>
  )
};

const query = graphql`
  query {
    strapiAbout {
     id
     Description
     Membre {
        Name
        Image {
          id
          url
        }
      }
    }
  }
`;

export default AgencyPage;