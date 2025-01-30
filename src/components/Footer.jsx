import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center fw-bold fs-6">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mohamed Shneshn. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
