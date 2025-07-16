import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            className="w-full max-w-sm sm:max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 relative animate-fadeIn"
            data-aos="zoom-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setOrderPopup(false)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-primary transition-all"
            >
              <IoCloseOutline />
            </button>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary dark:text-white mb-4">
              Complete Your Order
            </h2>

            {/* Input Fields */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full rounded-lg px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              {/* Order Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full font-semibold shadow-md"
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
