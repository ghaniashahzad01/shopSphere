import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";

const Menu = [
  {
    id: 1,
    name: "Home",
    to: "home",
  },
  {
    id: 2,
    name: "Products",
    to: "products",
  },
  {
    id: 3,
    name: "Contact Us",
    to: "contact",
  },
  {
    id: 4,
    name: "About Us",
    to: "about",
  },
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
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" />
              ShopSphere
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4 relative">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-slate-800 group-hover:text-primary" />
              {suggestions.length > 0 && (
                <ul className="absolute top-10 left-0 w-full bg-white dark:bg-slate-700 border rounded-md shadow-md z-50">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-2 py-1 hover:bg-primary/20 cursor-pointer"
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

            {/* order button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-4 hover:text-primary cursor-pointer duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
