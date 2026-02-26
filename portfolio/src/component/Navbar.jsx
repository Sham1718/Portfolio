// src/components/Navbar.jsx
import { useState } from "react";
import { useTheme } from "../context/Context";

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-[#11161C]/80 border-b border-neutral-200 dark:border-[#1F2933]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-black dark:text-white"
        >
          shyam.dev
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-neutral-600 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-[#161C23] border border-neutral-300 dark:border-[#1F2933] hover:bg-neutral-300 dark:hover:bg-[#1F2933] transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
          >
            Contact
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
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
            ? "max-h-64 border-t border-neutral-200 dark:border-[#1F2933] bg-white dark:bg-[#11161C]"
            : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-neutral-700 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;