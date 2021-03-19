import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../pages/home.css";

const Socials = () => {
  return (
    <div className="socials-container">
      <button className="socials-button">
        <a
          href="https://github.com/ooladuwa?tab=repositories"
          target="_blank"
          rel="noreferrer"
          >
          <FaGithub className="social-icon" size={42} />
        </a>
      </button>
      <button className="socials-button">
        <a
          href="https://www.linkedin.com/in/ooladuwa/"
          target="_blank"
          rel="noreferrer"
          >
          <FaLinkedin className="social-icon" size={42} />
        </a>
      </button>
      <button className="socials-button">
        <a href="https://twitter.com/ooladuwa" target="_blank" rel="noreferrer">
          <FaTwitter className="social-icon" size={42} />
        </a>
      </button>
    </div>
  );
};

export default Socials;
