import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto text-center border-t border-red-500 py-3 lg:py-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
        Cubicle | MD Rashid Hussain &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
