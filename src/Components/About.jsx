import React from "react";
import PropTypes from "prop-types";
import translations from "../translations";

const About = ({ language }) => {
  const copy = translations[language].about;

  return (
    <section className="padding profile-section" id="about">
      <div className="section-inner">
        <div className="profile-intro">
          <div className="section-heading">
            <p className="section-index">{copy.index}</p>
            <h2>
              {copy.heading}
              <span>{copy.headingAccent}</span>
            </h2>
          </div>
          <div className="profile-copy">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="profile-facts" aria-label={copy.factsLabel}>
          <div>
            <span>{copy.education}</span>
            <strong>{copy.degree}</strong>
          </div>
          <div>
            <span>{copy.specialty}</span>
            <strong>{copy.specialtyValue}</strong>
          </div>
          <div>
            <span>{copy.approach}</span>
            <strong>{copy.approachValue}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default About;
