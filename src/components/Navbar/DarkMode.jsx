import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 transition-all duration-300 hover:scale-110"
    >
      {theme === "dark" ? (
        <FiSun className="text-xl animate-spin-slow" />
      ) : (
        <FiMoon className="text-xl" />
      )}
    </button>
  );
};

export default DarkMode;
