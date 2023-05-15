/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Office_Bejziks from "./Components/Office_Bejziks";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Tommy Zajíc",
  title: "Office Bejziks Team Lead - Education Content Creator",
  email: "tommy.zajic@studentambassadors.com",
  gitHub: "TomiZ87",
  instagram: "tomaszajic87",
  linkedIn: "tomas-zajic",
  medium: "",
  twitter: "TomiZ87",
  youTube: "UCSL_35wn7alBpEinpGg2xzg",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Office_Bejziks />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
