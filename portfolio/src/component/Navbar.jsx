import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#11161C]/80 border-b border-[#1F2933]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ opacity: 0.8 }}
          className="text-xl font-semibold tracking-tight text-white"
        >
          shyam.dev
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="hidden md:inline-flex items-center px-4 py-2 text-sm rounded-full bg-white text-black hover:opacity-90 transition-opacity"
          >
            Contact
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block w-5 h-0.5 bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[#1F2933] bg-[#11161C]"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;