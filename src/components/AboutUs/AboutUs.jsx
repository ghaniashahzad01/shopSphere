import React from "react";
import { FaUsers, FaGlobe, FaStore } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white py-16 px-6"
    >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <div
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
          data-aos="fade-up"
          data-aos-delay="50"
        ></div>

        {/* Subheading */}
        <p
          className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to{" "}
          <span className="font-semibold text-primary">ShopSphere</span> — your
          ultimate destination for fashion, electronics, and lifestyle
          products. We're committed to quality, value, and helping you express
          your style.
        </p>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div
            className="bg-white/80 dark:bg-white/10 backdrop-blur p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={() => console.log("Clicked: Our Story")}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaUsers className="text-5xl mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
            <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Founded in 2024, ShopSphere started with a mission to make
              high-quality fashion and tech accessible for all. Today, we serve
              thousands of happy customers nationwide.
            </p>
          </div>

          {/* What We Offer */}
          <div
            className="bg-white/80 dark:bg-white/10 backdrop-blur p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={() => console.log("Clicked: What We Offer")}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaStore className="text-5xl mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
            <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              From trendy apparel to the newest gadgets, our collections cater
              to every style and budget, featuring seasonal promotions and
              exclusive deals.
            </p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
