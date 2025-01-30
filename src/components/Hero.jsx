import React, { useState, useEffect } from "react";
import "../assets/styles/Hero.css";
import resumeFile from "../assets/files/Mohamed_Salesforce_Developer__Resume.pdf";
import photo from "../assets/images/mohamed.jpg"; // Update with the correct path to your photo

const titles = [
  "Salesforce Developer.",
  "Salesforce Adminstrator.",
  "FullStack Developer.",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];

    if (!isDeleting && charIndex < currentTitle.length) {
      // Typing effect
      setTimeout(() => {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      setTimeout(() => {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && charIndex === 0) {
      // Move to next title
      setIsDeleting(false);
      setIndex((index + 1) % titles.length);
    }
  }, [charIndex, isDeleting, index]);

  const handleContactClick = () => {
    window.location.href =
      "mailto:eng.mohamed.shneshn@gmail.com?subject=Let's Get in Touch";
  };
  return (
    <section
      className="hero bg-primary text-white text-center container-dim"
      id="hero"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Photo */}
          <div className="col-lg-6 text-center text-lg-start justify-content-center align-items-center d-flex">
            <img
              src={photo}
              alt="Mohamed Shneshn"
              className="img-fluid rounded-circle mb-3 mb-lg-0 "
              style={{ maxWidth: "", height: "auto" }}
            />
          </div>

          {/* Right side: Text and Download Button */}
          <div className="col-lg-6 position-relative   mt-lg-0 mt-5 hero-content">
            <div className="d-flex flex-column align-items-start gap-3">
              <h1 className="display-4">
                Hi, I'm Mohamed <span className="wave">👋</span>
              </h1>
              <div className="text-wrapper">
                <p className="animated-text">
                  {text}
                  <span className="cursor">|</span>
                </p>
              </div>
              <p className="hero-lead mt-3">
                <span class="me-2">☕</span> fueled by coffee
              </p>
              <p className="hero-lead">
                <span class="me-2">🌎</span> based in CA, US
              </p>
              {/* my phone */}
              <p className="hero-lead">
                <span class="me-2">📞</span> +1 (424) 309-2850
              </p>
              <p className="hero-lead3" onClick={handleContactClick}>
                <span class="me-2">📧</span> let's get in touch!
              </p>
              <div className="social-container d-flex justify-content-center ">
                <div className="social-icons d-flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/mohamed-shneshn-a9188094/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/mohamedshneshn"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://x.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100032065122905"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>

              <a
                href={resumeFile}
                download="Mohamed_Shneshn_Resume.pdf"
                className="btn btn-outline-light btn-lg mt-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
