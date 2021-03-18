import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "../pages/about.css";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socials-container">
      <button className="socials-button">
        <a href="https://www.github.com/ooladuwa" target="_blank">
          <FaGithubSquare className="social-icon" size={42} />
        </a>
      </button>
      <button className="socials-button">
        <a href="https://www.linkedin.com/in/ooladuwa/" target="_blank">
          <FaLinkedin className="social-icon" size={42} />
        </a>
      </button>
      <button className="socials-button">
        <a href="https://twitter.com/ooladuwa" target="_blank">
          <FaTwitterSquare className="social-icon" size={42} />
        </a>
      </button>
    </div>
  );
};

export default Socials;
