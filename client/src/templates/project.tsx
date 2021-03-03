import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Markdown from "react-markdown";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
       url
      }
    }
  }
`;

const Project = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout  >
      <div>
          <h1>{article.title}</h1>
        </div>
        <Markdown source={article.content} escapeHtml={false} />
    </Layout>
  );
};

export default Project;