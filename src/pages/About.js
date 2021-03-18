import React from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import "./about.css"

const About = () => {
  return (
    <section className="about">
      <Navbar />
      <div className="about-me">
        <h1>Onaje Oladuwa</h1>
        <img
          className="naj-photo"
          src="https://i.ibb.co/25gMRY2/IMG-0057-jpeg-2.jpg"
          alt="Man wearing scarf"
        />
        <h3>"Naj"</h3>
        <button className="contact-button">Contact Me!</button>
        <Socials />
        <p>
          Full-stack software engineering student with a background in education.
          Focused on providing meaningful, genuine contributions to colleagues,
          stakeholders, and end-users. Experienced and visionary educator with
          demonstrated history of working with diverse populations, building
          community, and implementing restorative practices/social-emotional
          learning. Served as a teacher, department chair, grade-level chair, and
          coach.
        </p>
      </div>
    </section>
  )
}

export default About
