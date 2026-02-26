// src/components/Navbar.jsx
import { useState } from "react";
import { useTheme } from "../context/Context";

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          dev<span className="text-indigo-500">.</span>portfolio
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors duration-200"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-64 border-t border-gray-200 dark:border-gray-800"
            : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;