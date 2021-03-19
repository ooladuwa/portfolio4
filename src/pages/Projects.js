import React from "react";
import Navbar from "../components/Navbar";
import "./projects.css";
import Project from "../components/Project";
import { projectsData } from "../projectsData";


const Projects = () => {
  return (
    <section className="projects">
      <Navbar />
      <div className="projects-container">
        <div className="presentation">

          <img src={projectsData.imgUrl} alt="" />
        </div>
        <h2>{projectsData.name}</h2>
        <div className="information">
          <a href={projectsData.code} target="_blank" rel="noreferrer" className="see-code">
            <button className="code">See Code!</button>
          </a>
          <a href={projectsData.live} target="_blank" rel="noreferrer" className="see-app">
            <button className="app">See App!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
