import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./work.css";
import img from "../../assets/ISED_Canada_Logo.jpg";

const Work = () => {
  return (
    <section id="work">
      <h2>Work Experience</h2>
      <div className="work__container">
        <div>
          <h3>Research and Development Software Engineer</h3>
          <div className="work__content">
            <div className="work-image">
              <img src={img} alt="Gov" className="work__image" />
            </div>
            <div className="work__details">
              <div>
                <h4>Innovation Science Economic Development Canada</h4>
              </div>
              <div>
                <p>Details of the role...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
