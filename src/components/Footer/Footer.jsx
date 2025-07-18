import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  { title: "Home", link: "#" },
  { title: "About", link: "#about" },
  { title: "Contact", link: "#contact" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-6 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Logo & Info */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 text-2xl font-bold mb-4 text-white">
            <FiShoppingBag size={28} className="text-primary" />
            ShopSphere
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            ShopSphere is your trusted online store for the latest fashion,
            gadgets, and lifestyle products. Experience hassle-free shopping and
            unbeatable deals — all in one place.
          </p>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {FooterLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-primary transition-all duration-300 block hover:translate-x-1"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
     
      {/* Contact & Social */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>

          <div className="flex items-start gap-3 mb-4">
            <FaMapLocationDot className="text-primary mt-1" />
            <p className="text-gray-400 text-sm leading-relaxed">
              221B Baker Street, London, United Kingdom
            </p>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <IoCall className="text-primary mt-1" />
            <p className="text-gray-400 text-sm">+44 20 7946 0958</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-xl text-gray-400 hover:text-primary transition duration-300 hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl text-gray-400 hover:text-primary transition duration-300 hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl text-gray-400 hover:text-primary transition duration-300 hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ghania Shahzad. All rights reserved.
      </div>
       
    </footer>
  );
};

export default Footer;
