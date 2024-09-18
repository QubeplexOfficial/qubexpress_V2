import React, { useState } from "react";
import logo from "../../assets/logo.jpg"
import About from '../About/About.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ff0000] px-8 py-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold"><img src={logo} alt="LOGO" className="w-52"/></div>
        <div className="hidden md:flex space-x-6 text-xl">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/About" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="/" className="block text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="block text-white hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="block text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
