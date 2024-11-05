// src/components/Services.js
// import React from 'react';
import { FaChartLine, FaLightbulb, FaBullhorn, FaUserTie, FaProjectDiagram, FaRegHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-teal-400 mb-10 animate-fade-in">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Market Research & Analysis Card */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaChartLine className="text-teal-400 text-5xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Market Research & Analysis</h3>
            <p className="mt-4 text-white text-2xl">
              Understand the market dynamics and uncover opportunities that drive growth.
            </p>
          </div>
          
          {/* Business Strategy Consulting Card */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaLightbulb className="text-teal-400 text-5xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Business Strategy Consulting</h3>
            <p className="mt-4 text-white text-2xl">
              Develop effective strategies for long-term growth and sustainable success.
            </p>
          </div>
          
          {/* Brand Development Card */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaBullhorn className="text-teal-400 text-5xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Brand Development</h3>
            <p className="mt-4 text-white text-2xl">
              Craft a brand that resonates with your audience and stands out in the market.
            </p>
          </div>
          
        </div>

        {/* Statistics Section */}
        <div className="mt-20 flex justify-center space-x-10 text-center">
          <div className="text-white">
            <FaProjectDiagram className="text-6xl text-teal-400 mx-auto mb-2" />
            <h4 className="text-5xl font-bold">200+</h4>
            <p className="text-xl">Projects Completed</p>
          </div>
          <div className="text-white">
            <FaUserTie className="text-6xl text-teal-400 mx-auto mb-2" />
            <h4 className="text-5xl font-bold">150+</h4>
            <p className="text-xl">Satisfied Clients</p>
          </div>
          <div className="text-white">
            <FaRegHandshake className="text-6xl text-teal-400 mx-auto mb-2" />
            <h4 className="text-5xl font-bold">100%</h4>
            <p className="text-xl">Commitment</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 p-10 rounded-lg text-white">
          <h3 className="text-4xl text-teal-400 font-bold mb-10">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg">
              <p className="italic text-2xl mb-4">The team provided excellent service and helped us transform our business strategy. Highly recommend!</p>
              <h4 className="font-bold text-3xl text-teal-400">John Doe, CEO of TechCorp</h4>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <p className="italic text-2xl mb-4">Their market research insights were spot-on and guided our decision-making process perfectly.</p>
              <h4 className="font-bold text-3xl text-teal-400">Jane Smith, Marketing Director</h4>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <p className="italic text-2xl mb-4">An exceptional experience from start to finish. Our brand has never been stronger.</p>
              <h4 className="font-bold text-3xl text-teal-400">Sarah Johnson, Brand Manager</h4>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 p-10 text-center text-white animate-fade-in">
          <h3 className="text-4xl text-teal-400 font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-8 text-2xl max-w-2xl mx-auto">
            Get in touch with our team of experts to discover how we can help you reach your business goals with tailored strategies and innovative solutions.
          </p>
          <Link to="/contact">
          <button className="mt-8 bg-teal-400 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-teal-300 focus:ring-4 focus:ring-teal-500">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
