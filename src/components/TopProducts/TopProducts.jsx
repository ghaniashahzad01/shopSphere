import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Comfortable and stylish everyday outfit perfect for a relaxed look.",
    rating: 4.8,
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "Trendy printed shirt that adds a splash of personality to your style.",
    rating: 4.5,
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description: "Elegant and modern shirt designed for confident and stylish women.",
    rating: 4.9,
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-slate-900">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="text-primary text-sm uppercase tracking-wider mb-2"
          >
            Top Rated Products for You
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold dark:text-white"
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-500 dark:text-gray-300 text-sm mt-2"
          >
            Explore our top-selling, high-quality clothing handpicked just for you.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="
                bg-white/30
                dark:bg-white/10
                backdrop-blur-lg
                rounded-2xl
                relative
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
                group
                max-w-xs
                w-full
                cursor-pointer
              "
            >
              {/* fancy gradient ring behind image */}
              <div className="relative flex justify-center mt-[-60px]">
                <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-30 group-hover:opacity-50 transition"></div>
                <img
                  src={data.img}
                  alt={data.title}
                  className="relative w-32 h-32 object-contain transform group-hover:scale-110 transition duration-300 drop-shadow-lg"
                />
              </div>

              {/* content */}
              <div className="p-6 text-center">
                {/* star rating */}
                <div className="flex justify-center items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${i < Math.round(data.rating) ? "" : "opacity-30"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-300 ml-2">
                    ({data.rating.toFixed(1)})
                  </span>
                </div>

                <h3 className="text-xl font-semibold dark:text-white">
                  {data.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.description}
                </p>
                <button
                  className="
                    mt-6
                    bg-gradient-to-r from-primary to-secondary
                    text-white
                    px-5 py-2
                    rounded-full
                    font-semibold
                    transition
                    duration-300
                    hover:brightness-110
                    hover:scale-105
                  "
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
