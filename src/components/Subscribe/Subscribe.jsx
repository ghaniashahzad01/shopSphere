import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container py-14 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get Notified About New Products
          </h2>
          <p className="text-gray-300">
            Subscribe to our newsletter and stay updated on exclusive deals and latest arrivals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[70%] px-4 py-3 rounded-full text-black dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
