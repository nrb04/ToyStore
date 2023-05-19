import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-row">
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-4">
              <img
                src="/toyLogo.png" // Replace with your logo image source
                alt="Logo"
                className="h-8 w-8 mr-2 bg-white"
              />
              <span className="text-xl font-semibold">ToyStore</span>
            </div>
            <p className="text-sm text-gray-400">Only for Toy Lover</p>
            <div className="flex space-x-4 mt-4">
              <a href="#!" className="text-white hover:text-gray-400">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Email: info@example.com
              <br />
              Phone: +1 123 456 7890
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <p className="text-gray-400">
              123 Street Name
              <br />
              City, State
              <br />
              Country, Zip Code
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
