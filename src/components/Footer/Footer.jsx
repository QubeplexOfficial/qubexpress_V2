import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo2.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 w-52"><img src={logo} alt="" /></h3>
          <p className="text-gray-400">
          QubExpress is a reliable logistics delivery company, committed to providing fast, efficient, and secure services, ensuring your packages reach their destination on time.
          </p>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Regd Address : Unit 601, 9th floor Brigade Metropolis, Mahadevapura, Banglore-560048</li>
            <li>Support : support@qubexpress.com</li>
            <li>For any enquiries contact   <span class="text-yellow-500">  @8105504033</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Track</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-200">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} QubeXpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
