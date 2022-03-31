import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/absensi.png";
import IMG2 from "../../assets/chat.png";
import IMG3 from "../../assets/Futsalin.png";
import IMG4 from "../../assets/kearsipan.png";
import IMG5 from "../../assets/Lapak-sayur.png";
import IMG6 from "../../assets/lppm.png";
import IMG7 from "../../assets/pgsd.png";
import IMG8 from "../../assets/ppkn.png";
import IMG9 from "../../assets/service.png";
import IMG10 from "../../assets/surat.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Virtualization",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma Dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, demo, github, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
