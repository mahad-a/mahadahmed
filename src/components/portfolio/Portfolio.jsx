import "./portfolio.css";

import IMG1 from "../../assets/sysc-site.png";
import IMG2 from "../../assets/lingua.png";
import IMG3 from "../../assets/translate.png";
import IMG4 from "../../assets/tictactoe.png";
import IMG5 from "../../assets/unoflip.png";
import IMG6 from "../../assets/Health.png";
import IMG7 from "../../assets/directorytool.png";
import IMG8 from "../../assets/chat.png";
// import Translate from "../../assets/Translate_Program.exe";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Sysc Site",
      img: IMG1,
      description:
        "Built an intuitive and accessible student support website using React, JavaScript, HTML, and CSS, offering practice materials, academic guidance, and a GPA calculator to empower upcoming engineering students.",
      technologies: "React.js | Javascript | HTML | CSS",
      link: "https://hajar-assim.github.io/sysc-site/",
    },
    {
      id: 2,
      title: "Chat Application",
      img: IMG8,
      description:
        "Designed a robust chat application with a Python backend deployed using Docker, and a dynamic frontend built with React JS, ensuring seamless and responsive real-time communication.",
      technologies: "JavaScript | Python | Docker",
      link: "https://github.com/mahad-a/Chat-Application",
    },
    {
      id: 3,
      title: "Simple Translator",
      img: IMG3,
      description:
        "Developed a cross-platform translator application featuring a user-friendly GUI using Electron.js and a robust backend with Python Flask. The application utilizes the Googletrans library to provide accurate and fast translations between multiple languages. This project showcases my ability to integrate diverse technologies and build functional, user-centric applications, demonstrating proficiency in both frontend and backend development.",
      technologies: "Python | Electron.js | Javascript",
      link: "https://github.com/mahad-a/Simple-Translator-2",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      img: IMG4,
      description:
        "Built a classic Tic Tac Toe game using Java with an intuitive GUI, providing a fun and simple gaming experience for users.",
      technologies: "Java",
      link: "https://github.com/mahad-a/TicTacToe",
    },
    {
      id: 5,
      title: "UNO Flip",
      img: IMG5,
      description:
        "Developed an interactive UNO Flip card game featuring a user-friendly Java GUI, offering an engaging gameplay experience with all the classic and special UNO Flip rules.",
      technologies: "Java",
      link: "https://github.com/mahad-a/Uno-Flip-Card-Game",
    },
    {
      id: 6,
      title: "Health and Fitness Club Management System",
      img: IMG6,
      description:
        "Developed a comprehensive Health and Fitness Club Management System, leveraging Java, PostgreSQL, and GUIs to offer members, trainers, and administrative staff a versatile platform for registration, profile management, scheduling, and billing.",
      technologies: "Java | PostgreSQL",
      link: "https://github.com/mahad-a/Health-and-Fitness-Club-Management-System",
    },
    {
      id: 7,
      title: "Directory Creation Tool",
      img: IMG7,
      description:
        "Created a versatile Python tool with a PyQt GUI, allowing users to easily generate directories based on an input string or an uploaded text file for enhanced organization.",
      technologies: "Python",
      link: "https://github.com/mahad-a/Create-Directory-Tool",
    },
    {
      id: 8,
      title: "Lingua World",
      img: IMG2,
      description:
        "Developing an immersive language learning application featuring an integrated translator and an AI-powered language teacher. The app provides comprehensive lessons and interactive quizzes, facilitating effective and engaging language acquisition for users.",
      technologies: "React.js | Electron.js | Python | Java | PostgreSQL",
      link: "https://github.com/mahad-a/Lingua-World",
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
