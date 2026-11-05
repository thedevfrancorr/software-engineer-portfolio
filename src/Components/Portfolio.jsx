import React from "react";
import PropTypes from "prop-types";
import codeMark from "../images/FAM_Git.jpg";
import cityBackground from "../images/AvatarTWD.jpg";
import translations from "../translations";

const Portfolio = ({ language }) => {
  const copy = translations[language].portfolio;

  return (
    <section className="padding competency-section" id="portfolio">
      <img className="competency-background" src={cityBackground} alt="" />
      <div className="section-inner">
        <div className="competency-heading">
          <p className="section-index">
            <img className="competency-mark" src={codeMark} alt="" />
            {copy.index}
          </p>
          <h2>{copy.title}</h2>
          <p>{copy.subtitle}</p>
        </div>
        <div className="competency-grid">
          {copy.groups.map((group, index) => (
            <article className="competency-item" key={group.title}>
              <span className="competency-number">0{index + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="technology-list">
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Portfolio;
