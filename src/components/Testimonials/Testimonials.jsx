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
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from real customers who trust ShopMe for quality, value, and exceptional service.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-sm dark:text-slate-300 text-gray-600">
                        “{data.text}”
                      </p>
                      <h1 className="text-lg font-semibold dark:text-slate-200 text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">“</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;