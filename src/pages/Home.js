import React from "react";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="about-me">
        <h1>Onaje Oladuwa </h1>
            <h3>Full-Stack Developer</h3>
        
        <img
          className="naj-photo"
          src="https://i.ibb.co/25gMRY2/IMG-0057-jpeg-2.jpg"
          alt="Man wearing scarf"
        />
        <h3>"Naj"</h3>
        <Socials />
        {/* <p>
          Full-stack software engineering student with a background in
          education. Focused on providing meaningful, genuine contributions to
          colleagues, stakeholders, and end-users. Experienced and visionary
          educator with demonstrated history of working with diverse
          populations, building community, and implementing restorative
          practices/social-emotional learning. Served as a teacher, department
          chair, grade-level chair, and coach.
        </p> */}
            <a
              className="resume"
              href="/Onaje_Oladuwa_Resume_14-01-2021-13-27-41.pdf"
              download>
          <button className="resume-button">Download Resume</button>  
            </a>
      </div>
    </section>
  );
};

export default Home;
