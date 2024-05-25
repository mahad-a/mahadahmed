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
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hi my name is Mahad Ahmed, a software engineering student at Carleton University. My journey in software engineering has been enriched by engaging in 
            research-based work, particularly focusing on geodata. Through my experiences, I've delved deep into the intricate world of geospatial 
            technology, leveraging its potential to address complex problems and drive meaningful insights. Driven by curiosity and a hunger for knowledge, 
            I'm constantly seeking opportunities to expand my skill set and contribute to cutting-edge projects. Whether it's developing robust applications 
            or experimenting with emerging technologies, I'm committed to making a tangible impact in the field of software engineering.
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
