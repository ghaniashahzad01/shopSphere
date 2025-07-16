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

       
    </footer>
  );
};

export default Footer;
