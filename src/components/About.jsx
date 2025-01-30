import React from "react";
import "../assets/styles/About.css";
import Header from "./Header";

const About = () => {
  return (
    <section id="about" className="about-section container-dim bg-light">
      <div className="container ">
        <Header title="About Me" icon="🙋" />
        <div className="about-content">
          <p className="lead text-muted">
            I am a passionate <strong>Salesforce Developer</strong> with a
            strong background in web development and CRM solutions. I specialize
            in designing, implementing, and optimizing Salesforce applications
            to enhance user experience and business efficiency.
          </p>
          <ul className="list-unstyled">
            <li class="d-flex gap-2">
              <span>✅</span>
              <div>3+ years of experience in Salesforce development</div>
            </li>
            <li class="d-flex gap-2">
              <span>✅</span>
              <div>
                2+ years of experience in web development (React, JavaScript,
                HTML, CSS)
              </div>
            </li>
            <li class="d-flex gap-2">
              <span>✅</span>
              <div>Expertise in Apex, LWC, Visualforce, and integrations</div>
            </li>
            <li class="d-flex gap-2">
              <span>✅</span>
              <div>
                Passion for problem-solving and delivering innovative solutions
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
