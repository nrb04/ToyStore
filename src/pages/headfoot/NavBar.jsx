import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      {" "}
      <header className="w-full mt-5 text-gray-700 bg-white shadow-sm body-font">
        <div className="container flex flex-row justify-between p-6 mx-auto md:flex-row">
          <Link to="/">
            <img
              className="h-7 w-24"
              src="/public/toyLogo.png"
              alt=""
              srcset=""
            />
          </Link>
          <nav className="flex  text-base md:ml-auto">
            <Link to="/" className="mr-5 font-medium hover:text-gray-900">
              Home
            </Link>
            <Link to=" " className="mr-5 font-medium hover:text-gray-900">
              About
            </Link>
            <Link to=" " className="font-medium hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
            <Link to="/login" className="mr-5 font-medium hover:text-gray-900">
              Login
            </Link>
            <Link
              to="/registration"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
