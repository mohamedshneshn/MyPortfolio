import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import EducationCertifications from "./components/EducationCertifications";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EducationCertifications />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </Router>
  );
}

export default App;
