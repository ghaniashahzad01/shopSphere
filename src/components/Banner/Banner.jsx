import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaTags } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center py-12 sm:py-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="w-full max-w-[500px] h-auto rounded-2xl shadow-xl object-cover mx-auto"
            />
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6">
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              Winter Sale <br className="hidden sm:block" /> up to 50% Off
            </h1>

            {/* Underline Accent */}
            <div
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
              data-aos="fade-up"
              data-aos-delay="50"
            ></div>

            {/* Description */}
            <p
              data-aos="fade-up"
              className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
            >
              Discover the latest trends in fashion, electronics, and lifestyle
              with unbeatable discounts this winter season. Whether you're
              shopping for yourself or looking for the perfect gift, our
              high-quality products, fast delivery, and secure checkout make
              shopping easy and enjoyable.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
              {/* Feature 1 */}
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/80 dark:bg-white/10 backdrop-blur shadow hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-primary to-secondary text-white text-2xl">
                  <GrSecure />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-primary">
                  Quality Products
                </p>
              </div>

              {/* Feature 2 */}
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/80 dark:bg-white/10 backdrop-blur shadow hover:shadow-lg transition-all duration-300 group"
                data-aos-delay="100"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-2xl">
                  <IoFastFood />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-orange-400">
                  Fast Delivery
                </p>
              </div>

              {/* Feature 3 */}
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/80 dark:bg-white/10 backdrop-blur shadow hover:shadow-lg transition-all duration-300 group"
                data-aos-delay="200"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-2xl">
                  <GiFoodTruck />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-green-400">
                  Easy Payment Method
                </p>
              </div>

              {/* Feature 4 */}
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/80 dark:bg-white/10 backdrop-blur shadow hover:shadow-lg transition-all duration-300 group"
                data-aos-delay="300"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-2xl">
                  <FaTags />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-yellow-400">
                  Exclusive Seasonal Offers
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
