import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "ShopMe has completely transformed my shopping experience. The quality, variety, and service are all top-notch!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    text: "I love how easy it is to find great deals here. Fast delivery and great customer support every time!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Isabella Garcia",
    text: "Stylish, affordable, and reliable. I’ve recommended ShopMe to all my friends and family.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Liam Thompson",
    text: "From electronics to fashion, ShopMe never disappoints. The website is smooth and the offers are unbeatable.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-100 dark:bg-slate-900">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-14 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-primary text-sm tracking-wider uppercase mb-2">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold dark:text-white">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-gray-500 dark:text-gray-300 text-sm mt-2">
            Hear from real customers who trust ShopMe for quality, value, and exceptional service.
          </p>
        </div>

        {/* testimonials slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="p-4">
              <div
                className="
                  bg-white/20
                  dark:bg-white/10
                  backdrop-blur-lg
                  rounded-2xl
                  shadow-xl
                  p-8
                  relative
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              >
                {/* background quote mark */}
                <span className="absolute text-[10rem] font-serif text-primary/10 top-0 left-4 -translate-y-1/2 pointer-events-none select-none">
                  “
                </span>

                <div className="flex flex-col items-center gap-4 relative z-10">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-24 h-24 border-4 border-primary object-cover shadow-md"
                  />

                  <p className="text-center text-gray-700 dark:text-gray-200 text-sm mt-4 italic leading-relaxed">
                    “{data.text}”
                  </p>

                  <h3 className="mt-4 font-semibold text-primary dark:text-primary text-lg">
                    {data.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
