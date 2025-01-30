import React, { useState } from "react";
import "../assets/styles/ContactMe.css";
import Header from "./Header";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="text-black text-center container-dim" id="contact">
      <div className="container contact-form bg-white rounded-lg shadow-md max-w-md mx-auto p-6">
        <Header title="Contact Me" icon="💬" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
