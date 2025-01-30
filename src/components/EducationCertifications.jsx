import React from "react";
import { motion } from "framer-motion";
import { FaSalesforce } from "react-icons/fa"; // Import Salesforce Icon
import "../assets/styles/EducationCertifications.css"; // Ensure to style it
import Header from "./Header";

const education = [
  {
    title: "Salesforce Developer Bootcamp",
    institution: "Akidev",
    year: "2022 - 2024",
    location: "Fremont, CA",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    institution: "App Academy",
    year: "2019 - 2020",
    location: "San Francisco, CA",
  },
  {
    title: "Bachelor's of Electronic Engineering",
    institution: "MENOUF",
    year: "2008 - 2011",
    location: "Egypt",
  },
];

const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce Certified App Builder",
  "Salesforce Certified Platform Developer I",
  "Salesforce Certified AI Associate",
  "Salesforce Certified JavaScript Developer I",
];

const EducationCertifications = () => {
  return (
    <section id="education-certifications" className="py-5">
      <div className="container">
        <div className="row">
          {/* Education Section - Left Side */}
          <motion.div
            className="col-12 col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header title="Education" icon="🎓" />
            <ul className="list-group">
              {education.map((edu, index) => (
                <motion.li
                  key={index}
                  className="list-group-item education-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <h5 className="edu-title">{edu.title}</h5>
                  <p className="edu-institution">{edu.institution}</p>
                  <span className="edu-details">
                    {edu.year} | {edu.location}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications Section - Right Side */}
          <motion.div
            className="col-12 col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header title="Certifications" icon="🏅" />
            <ul className="list-group">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="list-group-item certification-item d-flex align-items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaSalesforce className="cert-icon" /> {/* Salesforce Icon */}
                  <span className="cert-text">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
