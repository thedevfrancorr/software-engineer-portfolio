import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/home-coding.jpg";
import profileImage from "../images/avatar/thedevfrancorr-avatar.jpg";
import translations from "../translations";

const Home = ({ name, gitHub, language }) => {
  const copy = translations[language].home;

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="home-content">
        <div className="home-copy">
          <p className="home-kicker">{copy.kicker}</p>
          <h1>{name}</h1>
          <h2>{copy.title}</h2>
          <p className="home-summary">{copy.summary}</p>
          <div className="home-actions">
            <a className="button button-primary" href="#portfolio">
              {copy.explore}
            </a>
            <a
              className="button button-secondary"
              href={`https://github.com/${gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="home-profile">
          <div className="profile-image-frame">
            <img
              className="profile-image"
              src={profileImage}
              alt={`${copy.avatarAlt} ${name}, ${copy.avatarDescription}`}
            />
          </div>
          <p className="profile-handle">github.com/{gitHub}</p>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label={copy.scroll}>
        <img src={arrowSvg} alt="" />
      </a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  gitHub: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Home;
