import React from "react";
import "./About.css";
import { FaEnvelope, FaLinkedin, FaGithub,  } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <strong>Eram Memon</strong>, currently in my final year of IT
          Engineering. I have a strong passion for <strong>Data Analytics</strong>,
          <strong> Machine Learning</strong>, and <strong>Full Stack Development</strong>.
          My journey revolves around building innovative solutions, exploring
          emerging technologies, and solving real-world problems with data-driven
          insights.
        </p>
        <p className="about-text">
          I enjoy working on projects that combine technical depth with creativity.
          Whether it’s designing web applications, developing AI models, or analyzing
          datasets, I strive to learn continuously and improve my skills.
        </p>

        <div className="about-links">
          <a href="mailto:erammemon392@gmail.com" className="about-link">
            <FaEnvelope /> erammemon392@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/eram-kandhal-46580b310/"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/ermemon12"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            <FaGithub /> GitHub
          </a>
          {/* <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            <FaGlobe /> Portfolio
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
