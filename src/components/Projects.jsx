import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../assets/styles/Projects.css";
import netMovie from "../assets/images/net-movie.jpg";
import carHub from "../assets/images/car-hub.jpg";
import simonGame from "../assets/images/simon-game.jpg";
import expensesTracker from "../assets/images/expenses-tracker.jpg";
import shopper from "../assets/images/shopper.jpg";
import Header from "./Header";

// Project Data
const projects = [
  {
    title: "Net-Movie App",
    year: "2024",
    summary:
      "A Salesforce-based application designed to enhance the movie streaming and management experience.",
    features: [
      "Search for movies by title",
      "Rate and review movies",
      "Browse top-rated and popular movies",
      "Recommended movies using Einstein AI",
    ],
    technologies: ["LWC", "TMDB API", "Bootstrap"],
    github: "https://github.com/mohamedshneshn/NetMovies",
    live: "https://creative-impala-brzz63-dev-ed.trailblaze.my.site.com/",
    image: netMovie,
  },
  {
    title: "Car-Hub Website",
    year: "2023",
    summary: "A Salesforce app streamlining car sales and services.",
    features: [
      "Buy new & used cars",
      "Customize new car orders",
      "Search by price, name, and model",
      "Book test drives using Flatpickr",
      "Payments via Stripe API",
      "Automate contracts with DocuSign",
    ],
    technologies: ["LWC", "Visualforce", "Stripe API", "Flatpickr"],
    github: "https://github.com/mohamedshneshn/CarHub",
    live: "https://akidev80-dev-ed.develop.my.site.com/s",
    image: carHub,
  },
  {
    title: "Shopper Website",
    year: "2022",
    summary: "An e-commerce platform offering online shopping experience.",
    features: [
      "View product details",
      "Add products to the cart",
      "Manage cart items",
    ],
    technologies: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
    github: "https://github.com/mohamedshneshn/shopper-v1",
    live: "https://github.com/mohamedshneshn/shopper-v1",
    image: shopper,
  },
  {
    title: "Simon Game",
    year: "2021",
    summary: "A web application that allows users to play the Simon game.",
    features: [
      "Follow the color pattern",
      "Test memory by repeating sequences",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    github: "https://github.com/mohamedshneshn/SimonGame",
    live: "https://mohamedshneshn.github.io/SimonGame/",
    image: simonGame,
  },
  {
    title: "Expenses-Tracker App",
    year: "2020",
    summary: "A web application for tracking expenses and incomes.",
    features: [
      "Add, edit, delete transactions",
      "Visualize expenses in charts",
    ],
    technologies: ["HTML5", "CSS", "React", "MongoDB", "Express JS"],
    github: "https://github.com/mohamedshneshn/expense-tracker-client",
    live: "https://expence-tracker-mohamed.netlify.app/login",
    image: expensesTracker,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container-dim ">
      <div className="container">
        <Header title="Projects" icon="🚀" />
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Image and Icons Container */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 object-cover card-img-top"
                  />
                  {/* Icons Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center image-overlay justify-center gap-4 bg-black transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub size={32} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt size={32} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title} ({project.year})
                  </h3>
                  <p className="text-gray-600 mt-2">{project.summary}</p>
                  <ul className="mt-2 text-gray-700">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>✅ {feature}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    <strong>Technologies:</strong>{" "}
                    {project.technologies.join(", ")}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
