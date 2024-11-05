// src/components/Blog.js
import { FaChartLine, FaBullhorn, FaLightbulb } from 'react-icons/fa';

function Blog() {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-teal-400 mb-4">Our Blog</h2>
        <p className="mt-2 text-white text-2xl max-w-2xl mx-auto">
          Stay updated with the latest insights and trends from industry experts.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Business Trends Card */}
          {/* <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"> */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaChartLine className="text-teal-400 text-6xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Business Trends in 2024</h3>
            <p className="mt-2 text-white text-xl">
              Explore the key business trends that are shaping the industry.
            </p>
            <button className="mt-4 bg-teal-400 text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-500">
              Read More
            </button>
          </div>
          
          {/* Branding Strategies Card */}
          {/* <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"> */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaBullhorn className="text-teal-400 text-6xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Effective Branding Strategies</h3>
            <p className="mt-2 text-white text-xl">
              Learn how to build a brand that stands out in a competitive market.
            </p>
            <button className="mt-4 bg-teal-400 text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-500">
              Read More
            </button>
          </div>
          
          {/* Market Research Tips Card */}
          {/* <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"> */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaLightbulb className="text-teal-400 text-6xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-teal-400">Market Research Tips</h3>
            <p className="mt-2 text-white text-xl">
              Tips for conducting market research effectively and efficiently.
            </p>
            <button className="mt-4 bg-teal-400 text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-500">
              Read More
            </button>
          </div>

        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
        <h3 className="text-4xl text-teal-400 font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-6 text-xl text-white">
            Subscribe to our blog to get the latest industry insights delivered to your inbox.
          </p>
          <button className="bg-teal-400 text-white px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-teal-300 focus:ring-4 focus:ring-teal-500">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
