import React from "react";
import InnerPage from "../templates/innerPage"
import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components"


const StyledAgencyPage = styled.div`
 .gridMembre {
    display: grid;
    grid-gap: 25px;
    margin: 30px auto;
    p {
      line-height: 1.5;
      font-size: 20px;
    }
    .member {
      margin-bottom: 10px;
    }
    a {
      color: black;
      text-decoration: none; 
      &:hover {
        text-decoration: underline;
      }
    }
    grid-template-columns: 1fr 1fr;
    @media (max-width: 780px) {
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
        {about.Membre.map(item => <div className="membre" key={item.Image.id}><img src={item.Image.url} /><div><p>{item.Name}</p><a href={`mailto:${item.email}`}>{item.email}</a></div></div>)}
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
        email
        Image {
          id
          url
        }
      }
    }
  }
`;

export default AgencyPage;