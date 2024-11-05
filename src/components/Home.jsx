// src/components/Home.js
// import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="flex-box relative text-white py-5 overflow-hidden">
      <div className="container mx-auto relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold animate-fade-in">
          Welcome to <span className="text-teal-400">Aiotum International</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg md:max-w-2xl mx-auto animate-slide-in">
          Your trusted partner in Business Development and Consultancy. We help you unlock growth and drive success.
        </p>
        <Link to="/services">
          <button className="mt-8 bg-teal-400 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-teal-300 focus:ring-4 focus:ring-teal-500">
            Get Started
          </button>
          </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-5 mt-10">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold animate-fade-in">
            Why choose <span className="text-teal-400">Aiotum International?</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg md:max-w-3xl mx-auto">
            Aiotum International is dedicated to helping businesses grow with tailored strategies, in-depth market analysis, and expert consultation.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
            <div className="p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-400">Comprehensive Solutions</h3>
              <p className="mt-2 text-white text-base md:text-lg">Full-service solutions, from market research to implementation, tailored for your needs.</p>
            </div>
            <div className="p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-400">Expert Guidance</h3>
              <p className="mt-2 text-white text-base md:text-lg">Our team of seasoned consultants brings industry expertise and strategic insight.</p>
            </div>
            <div className="p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-400">Long-Term Growth</h3>
              <p className="mt-2 text-white text-base md:text-lg">Sustainable growth strategies to ensure your business thrives long-term.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl text-teal-400 font-bold">Our Impact</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-teal-400">500+</h3>
              <p className="mt-2 text-lg md:text-xl">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-teal-400">300+</h3>
              <p className="mt-2 text-lg md:text-xl">Clients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-teal-400">20+</h3>
              <p className="mt-2 text-lg md:text-xl">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="text-white py-10">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl text-teal-400 font-bold">What Our Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="w-full p-4 rounded-lg shadow-lg">
              <p className="text-white text-lg md:text-xl italic">Aiotum helped us achieve our goals with excellent insights and strategy. Their team is amazing!</p>
              <p className="mt-4 font-bold text-white text-base md:text-lg">- Sarah J., CEO of TechCorp</p>
            </div>
            <div className="w-full p-4 rounded-lg shadow-lg">
              <p className="text-white text-lg md:text-xl italic">Professional, insightful, and supportive. Aiotum made a significant impact on our business.</p>
              <p className="mt-4 font-bold text-white text-base md:text-lg">- David L., Founder of HealthPlus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
