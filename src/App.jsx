import React, { useEffect, useState } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import translations from "./translations";

import "./styles.css";

const siteProps = {
  name: "Francisco Arroyo",
  email: "",
  gitHub: "thedevfrancorr",
  instagram: "thedevfrancorr",
  linkedIn: "Francisco Arroyo",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#0B1C22";

const App = () => {
  const [language, setLanguage] = useState("es");
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${siteProps.name} | ${copy.pageTitle}`;
  }, [copy.pageTitle, language]);

  return (
    <div id="main">
      <Header language={language} onLanguageChange={setLanguage} />
      <Home name={siteProps.name} gitHub={siteProps.gitHub} language={language} />
      <About language={language} />
      <Portfolio language={language} />
      <Footer {...siteProps} primaryColor={primaryColor} language={language} />
    </div>
  );
};

export default App;
