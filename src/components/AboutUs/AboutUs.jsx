import React from "react";
import { FaUsers, FaGlobe, FaStore } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="bg-gray-100 dark:bg-slate-900 dark:text-white py-16 px-6"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2
          className="text-4xl font-bold mb-6 text-primary"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <p
          className="text-gray-700 dark:text-gray-300 text-lg mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to{" "}
          <span className="font-semibold text-secondary">ShopSphere</span> —
          your one-stop destination for the latest trends in fashion,
          electronics, and lifestyle products. We are dedicated to delivering
          quality, value, and style to every customer.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Our Story */}
          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg duration-200 active:scale-95 transform transition-transform cursor-pointer"
            onClick={() => console.log("Clicked: Our Story")}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaUsers className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2024, <strong>ShopSphere</strong> began with a vision to
              make fashion and tech accessible to everyone. Today, we proudly
              serve thousands of satisfied customers across the nation.
            </p>
          </div>

          {/* What We Offer */}
          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg duration-200 active:scale-95 transform transition-transform cursor-pointer"
            onClick={() => console.log("Clicked: What We Offer")}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaStore className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
            <p className="text-gray-600 dark:text-gray-300">
              From premium apparel to cutting-edge gadgets, our collections are
              curated to suit every taste and budget — enhanced with exclusive
              offers and top-rated deals.
            </p>
          </div>

          {/* Our Mission */}
          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg duration-200 active:scale-95 transform transition-transform cursor-pointer"
            onClick={() => console.log("Clicked: Our Mission")}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGlobe className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              At <strong>ShopSphere</strong>, we aim to empower individuals through
              quality products and unmatched customer service—building a
              thriving community rooted in style, innovation, and trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
