import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="my-4 w-[80vw] mx-auto flex justify-between">
        {/* Home Link */}
        <div className="relative z-20">
          <Link
            to="/"
            className={`text-dark ${
              currentPath === "/" ? "font-bold bg-dark text-white py-4 px-10" : ""
            }`}
          >
            Home
          </Link>
        </div>

        {/* About Link */}
        <div className="relative z-20">
          <Link
            to="/about"
            className={`text-dark ${
              currentPath === "/about" ? "font-bold bg-dark text-white py-4 px-10" : ""
            }`}
          >
            About
          </Link>
        </div>

        {/* Academic Link */}
        <div className="relative inline-block text-left">
          <Link
            to="/academic"
            className={`text-dark ${
              currentPath === "/academic" ? "font-bold bg-dark text-white py-4 px-10" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Academic
          </Link>

          {/* Dropdown menu */}
          <div
            className={`z-10 ${isDropdownOpen ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Notice Link */}
        <div className="relative inline-block text-left">
          <Link
            to="/notice"
            className={`text-dark ${
              currentPath === "/notice" ? "font-bold bg-dark text-white py-4 px-10" : ""
            }`}
          >
            Notice
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
