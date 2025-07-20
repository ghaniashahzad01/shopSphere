import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% Off on Men's Wear",
    description:
      "Refresh your wardrobe with premium-quality men's clothing at half the price. Limited-time winter collection deals available now!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off on Women's Wear",
    description:
      "Discover elegance and style with our exclusive women's fashion — now at 30% off. Shop trending outfits before they're gone.",
  },
  {
    id: 3,
    img: Image3,
    title: "Save 70% Storewide",
    description:
      "Enjoy massive discounts on electronics, clothing, accessories, and more. Don't miss this season's biggest savings event!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section id="home">
      <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
        
        {/* Decorative background shape */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container px-4">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  
                  {/* text content */}
                  <div
                    className="flex flex-col justify-center gap-6 order-2 sm:order-1 text-center sm:text-left"
                  >
                    <div className="backdrop-blur-md bg-white/40 dark:bg-slate-800/50 rounded-lg p-6 sm:p-10">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="800"
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary dark:text-white"
                      >
                        {data.title}
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg"
                      >
                        {data.description}
                      </p>
                      <button
                        onClick={handleOrderPopup}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white py-3 px-6 rounded-full font-semibold shadow-lg"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>

                  {/* image */}
                  <div className="order-1 sm:order-2 flex justify-center">
                    <div
                      data-aos="zoom-in"
                      className="relative"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain drop-shadow-xl hover:scale-105 transition duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
