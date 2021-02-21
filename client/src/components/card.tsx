import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`}>
      <div>
        <div>
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div>
          <p>
            {article.node.category.name}
          </p>
          <p>
            {article.node.title}
          </p>
          <div>
            <hr />
            <div>
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                  />
                )}
              </div>
              <div>
                <p>
                  {article.node.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;