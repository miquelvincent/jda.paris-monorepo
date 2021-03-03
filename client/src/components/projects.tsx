import React from "react";
import Card from "./card";

const Projects = ({ projects }) => {
  return (
    <div className="grid">
      {projects.map((project, i) => {
        return (
          <React.Fragment key={i}>
            <Card
              project={project}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Projects;