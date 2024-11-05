// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Company Name */}
          <div className="text-3xl font-bold text-white">
            Aiotum International
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-2xl hover:text-teal-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-2xl hover:text-teal-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white text-2xl hover:text-teal-400 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-white text-2xl hover:text-teal-400 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white text-2xl hover:text-teal-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 text-lg font-medium hover:text-teal-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block px-3 py-2 text-lg font-medium hover:text-teal-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white block px-3 py-2 text-lg font-medium hover:text-teal-400 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className="text-white block px-3 py-2 text-lg font-medium hover:text-teal-400 transition-colors duration-300"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-white block px-3 py-2 text-lg font-medium hover:text-teal-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
