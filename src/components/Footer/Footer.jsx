import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Footer = () => {
  return (
    <div id="contact" className="text-white bg-[#212529]">
      <div className="container mx-auto px-4">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-6 py-12">
          {/* Company Info */}
          <div className="px-4">
            <h1 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <FiShoppingBag size="28" /> ShopSphere
            </h1>
            <p className="text-gray-300">
              ShopSphere is your trusted online store for the latest fashion, gadgets, and lifestyle products. Experience hassle-free shopping and unbeatable deals.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="hover:text-primary text-gray-300 transition-all duration-300 hover:translate-x-1 block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex items-center gap-4">
                <a href="#"><FaInstagram className="text-2xl hover:text-primary" /></a>
                <a href="#"><FaFacebook className="text-2xl hover:text-primary" /></a>
                <a href="#"><FaLinkedin className="text-2xl hover:text-primary" /></a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-4">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="flex items-start gap-3 mb-4 text-gray-300">
              <FaMapLocationDot className="mt-1" />
              <p>221B Baker Street, London, United Kingdom</p>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <IoCall className="mt-1" />
              <p>+44 20 7946 0958</p>
            </div>
          </div>
        </div>
        <div className="text-center py-4 text-gray-500 border-t border-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Ghania Shahzad. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
