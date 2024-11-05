// src/components/Footer.js
// import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiXdotorg } from 'react-icons/si';

function Footer() {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Branding and About */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-teal-300 mb-4">Aiotum International</h2>
          <p className="text-gray-200 leading-relaxed">
            Dedicated to empowering businesses with transformative insights and strategies. 
            Partner with us to unlock growth and innovation in the competitive world of business development consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-2xl text-teal-300 font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li><a href="/" className="hover:text-teal-400">Home</a></li>
            <li><a href="about" className="hover:text-teal-400">About</a></li>
            <li><a href="services" className="hover:text-teal-400">Services</a></li>
            <li><a href="blogs" className="hover:text-teal-400">Blogs</a></li>
            <li><a href="contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-2xl text-teal-300 font-bold mb-4">Connect with Us</h3>
          <p className="text-gray-200 mb-4">Follow us on our social channels:</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <SiXdotorg size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Aiotum International. All rights reserved.</p>
        <p className="mt-2 text-sm">Transforming ideas into results, empowering growth, and guiding businesses to new horizons.</p>
      </div>
    </footer>
  );
}

export default Footer;
