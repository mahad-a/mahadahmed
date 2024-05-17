import "./portfolio.css";

import IMG1 from "../../assets/Flexcavo.png";
import IMG2 from "../../assets/Meetnative.png";
import IMG3 from "../../assets/Mobinspire.png";
import Translate from "../../assets/Translate_Program.exe"
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Flexcavo",
      img: IMG1,
      description:
        "It is the website for construction machine renting company (Flexcavo) from Berlin",
      technologies: "React.js | Pixel-perfect | SCSS | Styled Component",
      link: "https://www.flexcavo.de/",
    },
    {
      id: 2,
      title: "Meet Native",
      img: IMG2,
      description:
        "MeetNative is an upselling platform that helps consumers and local businesses get more for their money.",
      technologies: "React | React Native | Android | iOS",
      link: "https://meetnative.com/",
    },
    {
      id: 3,
      title: "Simple Translator",
      img: IMG3,
      description:
        "A Python program that allows users to translate text from English to many different languages such as: French, Spanish, German, Japanese, and Simplified Chinese. It utilizes the Google Translate API for translation.",
      technologies: "Python | Tkinter",
      link: Translate,
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo | Download App
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
