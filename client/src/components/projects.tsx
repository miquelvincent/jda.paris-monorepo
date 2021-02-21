import React from "react";
import Card from "./card";

const Projects = ({ projects }) => {
  return (
    <div>
      <div>
        <div>
          {projects.map((project, i) => {
            return (
              <React.Fragment key="i">
                <Card
                  project={project}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;