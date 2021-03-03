import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image";

//** Check this  link to use images from cloudinary : https://www.npmjs.com/package/gatsby-source-cloudinary */
const Card = ({ project }) => {
  return (
    <AniLink paintDrip to={`/project/${project.node.slug}`}>
      <div>
        <div>
        <Img fixed={{width: 400, height: 200, src: `${project.node.image.localFile.publicURL}`, srcSet:`${project.node.image.localFile.publicURL}`}}/>
        </div>
        <div> 
          <p>
            {project.node.title}
          </p>    
        </div>
      </div>
    </AniLink>
  );
};

export default Card;