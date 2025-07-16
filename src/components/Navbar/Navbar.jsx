import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";

const Menu = [
  { id: 1, name: "Home", to: "home" },
  { id: 2, name: "Products", to: "products" },
  { id: 3, name: "Contact Us", to: "contact" },
  { id: 4, name: "About Us", to: "about" },
];

const allItems = [
  "T-shirt",
  "Smart Watch",
  "Shoes",
  "Kids Jacket",
  "Jeans",
  "Bluetooth Speaker",
];

const Navbar = ({ handleOrderPopup }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = allItems.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white">
          <FiShoppingBag className="mr-2 text-primary" size={28} />
          ShopSphere
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-primary transition-colors"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Input */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />

          {suggestions.length > 0 && (
            <ul className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-lg max-h-40 overflow-y-auto">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm"
                  onClick={() => {
                    setSearchTerm(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <span className="hidden sm:block">Order</span>
            <FaCartShopping />
          </button>

          <DarkMode />
        </div>
      </div>

    
    </div>
  );
};

export default Navbar;
