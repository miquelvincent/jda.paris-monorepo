import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import "../assets/css/main.css";

const AgencyPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div>
          <h1>{data.strapiAbout.Description}</h1>
         {data.strapiAbout.Membre.map((item, i) => <Img key={i} fixed={{width: 400, height: 200, src:`${item.Image.url}`, srcSet:`${item.Image.url}`}} />)}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiAbout {
     id
     Description
     Membre {
        Image {
          id
          url
        }
      }
    }
  }
`;

export default AgencyPage;