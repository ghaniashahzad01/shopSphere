import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-200 duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Hero handleOrderPopup={handleOrderPopup} />
      <Products handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <AboutUs />
      <Testimonials />
      <Footer />

      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
