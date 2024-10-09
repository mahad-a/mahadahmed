import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/camels.webp";

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Camels" className="about__image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor of Engineering: Software Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>9+ Completed Projects</small>
            </article>
          </div>
          <p>
          Hi! I’m Mahad Ahmed, a 3rd-year Software Engineering student at Carleton University, with a keen interest in DevOps and cloud computing. I’m passionate about building scalable, efficient, and impactful software solutions that make a difference.

          <br/><br/> What I’ve been up to:
          <br/> &emsp;• Completed internships as a DevOps Software Engineer and R&D Software Engineer at Communications Research Centre Canada, where I worked on cloud infrastructure projects using AWS CDK, Python, and advanced spatial analysis techniques.
          <br/> &emsp;• Developed and deployed cloud applications, spearheading projects that streamlined data collection and enhanced reporting capabilities.
          <br/> &emsp;• Built a Discord music bot and a student support website, applying my skills in Python, React, and full-stack development.

          <br/><br/> I’m always eager to learn and grow, and I’m driven by the challenge of solving complex engineering problems. I’m looking for my next opportunity to apply my technical skills and contribute to projects that have a real-world impact.

          <br/><br/> Outside of coding, you can find me exploring new tech trends, working on personal projects, and enjoying the Ottawa outdoors. I’d love to connect over coffee and chat about all things tech!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me For More Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
