import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { theme, loading } = useSelector((state) => state.ui);

  // Apply theme to HTML element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load theme preference on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // If we have a saved theme, use it
      if (savedTheme === "dark" && theme !== "dark") {
        dispatch(toggleTheme());
      }
    } else {
      // Optional: Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark && theme !== "dark") {
        dispatch(toggleTheme());
      }
    }
  }, []);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          User Dashboard
        </h1>
        <div className="flex items-center gap-4">
          {loading && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Loading...
            </span>
          )}
          {/* <button
            onClick={handleToggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
