import "./contact.css";
import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <div className="icon-with-text">
                <BsLinkedin className="contact__option-icon" />
                <h5><a href="https://www.linkedin.com/in/mahad-ahmed-430b50250/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></h5>
              </div>
              <div className="icon-with-text">
                <FaGithub className="contact__option-icon" />
                <h5><a href="https://github.com/mahad-a" target="_blank" rel="noopener noreferrer">My GitHub</a></h5>
              </div>
              <div className="icon-with-text">
                <MdOutlineEmail className="contact__option-icon" />
                <h5><a href="mailto:mahad.ahmed613@gmail.com" target="_blank" rel="noopener noreferrer">mahad.ahmed613@gmail.com</a></h5>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
