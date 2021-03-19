import React from "react";
import { projectsData } from "../projectsData";
import Projects from "../pages/Projects";

const Project = (props) => {
  const { projectData } = props;

  return (
    <div>
      <Projects 
        projectData={projectsData.map((projectData) => {
          return Projects;
        })}
        />
      {/* {projectsData.map((projectData) => (
        <Projects key={projectData.id} {...projectData} />
        ))}
        console.log(projectData) */}
    </div>
  );
};

export default Project;
