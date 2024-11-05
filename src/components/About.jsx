// src/components/About.js
// import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="py-1 ">
      {/* Background section */}
      <div className="text-white py-1">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl text-teal-400 font-extrabold mb-4">
            About Us
          </h2>
          <p className="text-xl max-w-5xl mx-auto">
            At Aiotum International, we empower businesses to reach new heights through innovative strategies and sustainable growth solutions. With a team of industry experts, we bring in-depth market knowledge and a tailored approach to meet each client’s unique needs. From strategic consulting to impactful business development, our partnership-driven model ensures that we’re with you every step of the way—committed to your success and to creating lasting value.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto text-center my-12">
        <h3 className="text-4xl font-bold text-teal-400">Our Mission</h3>
        <p className="mt-4 text-xl text-white max-w-5xl mx-auto">
          We strive to provide innovative solutions and personalized strategies that foster lasting success. Our mission is to support our clients in achieving their business goals through actionable insights, a results-driven approach, and a commitment to excellence.
        </p>
      </div>

      {/* Services Overview */}
      <div className="py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-teal-400 mb-6">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h4 className="text-3xl font-bold text-teal-400 mb-2">
                Business Development
              </h4>
              <p className="text-2xl text-white">
                Tailored strategies that empower your business to grow and thrive in competitive markets.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h4 className="text-3xl font-bold text-teal-400 mb-2">
                Strategic Consulting
              </h4>
              <p className="text-2xl text-white">
                Expert advice to help streamline operations, increase efficiency, and drive profitability.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h4 className="text-3xl font-bold text-teal-400 mb-2">
                Sustainability Solutions
              </h4>
              <p className="text-2xl text-white">
                Sustainable practices that reduce your footprint while enhancing brand reputation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto text-center py-12">
        <h3 className="text-5xl font-bold text-teal-400 mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/1183952198/photo/all-the-experiences-ive-had-has-taught-me-a-lot.jpg?s=612x612&w=0&k=20&c=sVCLyE0E2bR-HHYXcOT1gpqJ5BVmiLHNF0gqufp3D8k="
              alt="Team Member 1"
              className="w-42 h-36 rounded-full mb-4"
            />
            <h4 className="text-3xl text-teal-400 font-bold">John Doe</h4>
            <p className="text-2xl text-white">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/1635752817/photo/business-black-woman-and-city-portrait-while-happy-with-outdoor-with-vision-and-pride-face-of.jpg?s=612x612&w=0&k=20&c=02OsW8wOJbAAeVh9Sdiuy1_0ZWm58jibPsL_4vH2Vhs="
              alt="Team Member 2"
              className="w-42 h-36 rounded-full mb-4"
            />
            <h4 className="text-3xl text-teal-400 font-bold">Jane Smith</h4>
            <p className="text-2xl text-white">Head of Strategy</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/2147686869/photo/portrait-of-laughing-african-american-woman-in-the-city.jpg?s=612x612&w=0&k=20&c=4ZGb_Qqerk9lqZhudtCGP4aF4O8HfPrd1pKop0wM0uA="
              alt="Team Member 3"
              className="w-42 h-36 rounded-full mb-4"
            />
            <h4 className="text-3xl text-teal-400 font-bold">Emma Wilson</h4>
            <p className="text-2xl text-white">Sustainability Expert</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-8">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl text-teal-400 font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-6">
            Let Aiotum International partner with you on your journey to success. Get in touch with us today to learn more about our services.
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

export default About;
