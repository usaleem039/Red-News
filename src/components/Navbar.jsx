// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-red-600 p-2 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left side: Logo and App name */}
        <div className="flex items-center space-x-2">
          <img
            src="\logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-full border-2 border-white"
          />
          <span className="text-white text-lg hover:cursor-pointer font-bold"><Link to="home">Red-News</Link></span>
        </div>

        {/* Middle: Navbar links */}
        <div className="absolute ml-2 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <Link
            to="home"
            className="text-white text-sm hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="aboutus"
            className="text-white text-sm hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
