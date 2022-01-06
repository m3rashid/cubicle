import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto text-center border-t border-cyan-500 py-3 lg:py-6 font-semibold text-white">
        Cubicle | MD Rashid Hussain &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
