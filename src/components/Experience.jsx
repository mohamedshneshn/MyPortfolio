import React from "react";
import { motion } from "framer-motion"; // For animations
import "../assets/styles/Experience.css";
import Header from "./Header";

const Experience = () => {
  const experiences = [
    {
      role: "Salesforce Developer",
      company: "Akidev",
      duration: "05/2022 - Present",
      description: [
        "Gathered business requirements and implemented Agile SDLC using Jira for task tracking and sprint management.",
        "Configured Salesforce (objects, layouts, validation, workflows, etc.)",
        "Managed user access, sharing rules, and OWD settings.",
        "Built Service Cloud solutions, including Case and Entitlement Management.",
        "Configured Salesforce Sales Cloud to streamline sales processes and enhance user experience.",
        "Upgraded to Salesforce Lightning; developed custom Lightning components.",
        "Developed Apex (Triggers, Classes, Batch, Scheduled) and LWC.",
        "Integrated Salesforce with external systems using SOAP/REST APIs.",
        "Created dashboards, reports, and test scripts for UI components.",
        "Boosted system performance by 50% with code optimizations.",
      ],
    },
    {
      role: "FullStack JavaScript Web Developer",
      company: "Freelance",
      duration: "05/2019 - 05/2022",
      description: [
        "Developed full-stack web applications using JavaScript, Node.js, Express.js, React.js, and MongoDB.",
        "Collaborated with clients to deliver customized solutions on time.",
        "Built scalable RESTful APIs and user-friendly, responsive interfaces.",
        "Designed and managed MongoDB schemas for high performance and data integrity.",
        "Created modular React.js components, improving code maintainability.",
        "Enhanced performance with Redux and modern JavaScript techniques.",
        "Deployed applications on Heroku/AWS; used Git/GitHub for version control.",
        "Debugged and optimized applications for better functionality and user experience.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section container-dim ">
      <div className="container">
        <Header title="Experience" icon="👨‍💻" />
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="experience-header">
                <h3 className="role">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
              </div>
              <ul className="experience-details">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="experience-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
