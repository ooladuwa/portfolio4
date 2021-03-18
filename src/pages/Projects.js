import React from "react";
import Navbar from "../components/Navbar";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Navbar />
      <div className="project-container">
        <ul>
          <h1>projects</h1>
          {/* use MAP to return projects from the created project database */}
        </ul>
      </div>
    </section>
  )
}

export default Projects;
