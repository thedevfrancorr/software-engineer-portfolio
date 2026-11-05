/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";
import translations from "../translations";

const Header = ({ language, onLanguageChange }) => {
  const copy = translations[language].header;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="#home" aria-label={copy.home}>
          <span aria-hidden="true">&lt;/&gt;</span> TheDevFranCorr
        </a>
        <nav className="site-nav" aria-label={copy.navigation}>
          <a href="#about">{copy.profile}</a>
          <a href="#portfolio">{copy.competencies}</a>
          <a href="#footer">{copy.contact}</a>
        </nav>
        <label className="language-switcher">
          <span>{copy.language}</span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
            aria-label={copy.language}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </label>
      </div>
    </header>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default Header;
