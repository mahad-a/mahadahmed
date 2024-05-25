import "./portfolio.css";

import IMG1 from "../../assets/sysc-site.png";
import IMG2 from "../../assets/Meetnative.png";
import IMG3 from "../../assets/translate.png";
import Translate from "../../assets/Translate_Program.exe"
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Sysc Site",
      img: IMG1,
      description:
        "An intuitive and accessible student support website using React, JavaScript, HTML, and CSS, offering practice materials, academic guidance, and a GPA calculator to empower upcoming engineering students.",
      technologies: "React.js | Javascript | HTML | CSS",
      link: "https://hajar-assim.github.io/sysc-site/",
    },
    {
      id: 2,
      title: "Lingua World",
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
    {
      id: 4,
      title: "Tic Tac Toe",
      img: null,
      description:
        "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "https://www.raise.africa/",
    },
    {
      id: 5,
      title: "UNO Flip",
      img: null,
      description:
        "Implemented the UNO Flip card game in Java with Graphical User Interfaces (GUIs), employing the Model-View-Controller (MVC) design pattern for a modular and scalable structure. Integrated an AI player featuring dynamic sizing and sophisticated strategies, enhancing the challenge and unpredictability of opponents.",
      technologies: "Java",
      link: "https://dev-pwa.potsave.com/",
    },
    {
      id: 6,
      title: "Health and Fitness Club Management System",
      img: null,
      description:
        "Developed a comprehensive Health and Fitness Club Management System, leveraging Java, PostgreSQL, and GUIs to offer members, trainers, and administrative staff a versatile platform for registration, profile management, scheduling, and billing.",
      technologies: "Java | PostgreSQL",
      link: "https://healthcare.utah.edu/",
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
