import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Card = ({ project }) => {
  return (
    <Link to={`/project/${project.node.slug}`}>
      <div>
        <div>
          <Img
            fixed={project.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div> 
          <p>
            {project.node.title}
          </p>    
        </div>
      </div>
    </Link>
  );
};

export default Card;