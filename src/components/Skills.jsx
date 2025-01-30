import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/Skills.css";
import Header from "./Header";

const skills = {
  "Salesforce Development": {
    "Programming & Automation": [
      "Apex Triggers",
      "Apex Classes",
      "Apex Test Classes",
      "Batch Apex",
    ],
    "Flows & Processes": ["Screen Flows", "Triggered Flows", "Process Builder"],
    "UI Development": ["Visualforce", "Aura Components", "LWC Components"],
    "Salesforce Clouds": ["Sales Cloud", "Service Cloud", "Experience Cloud"],
    "Data & Integrations": ["Data Loader", "SOQL and SOSL", "REST APIs"],
    "AI & Advanced Tools": [
      "Einstein Chatbot",
      "Einstein Recommendation Builder",
    ],
  },
  "Web Development": {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    "Frontend Frameworks": ["React JS", "Bootstrap", "Swiper JS"],
    "Backend Frameworks": ["Node JS", "Express JS"],
    "Database Technologies": ["SQL", "MongoDB"],
    "Other Tools & Technologies": ["Git", "GitHub", "Ruby on Rails", "Python"],
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-4">
      <div className="container">
        <Header title="Skills" icon="🛠️" />
        <div className="row">
          {Object.entries(skills).map(([category, subcategories], index) => (
            <motion.div
              key={index}
              className={`col-12 col-md-6 ${
                index === 0 ? "col-lg-7" : "col-lg-5"
              } mb-4`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="skill-category">{category}</h3>
              <div className="skill-sections">
                {Object.entries(subcategories).map(
                  ([subcategory, items], idx) => (
                    <div key={idx} className="subcategory">
                      <h4 className="subcategory-title">{subcategory}</h4>
                      <div className="d-flex flex-wrap">
                        {items.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="badge bg-primary m-1 p-2 skill-badge"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
