import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Sham1718",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shyambharaskar",
    },
  ];

  return (
    <footer className="py-8 bg-[#0B0F14] border-t border-[#1F2933] px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-[#94A3B8]"
        >
          © {new Date().getFullYear()} Shyam Bharaskar. All rights reserved.
        </motion.p>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-6"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-[#94A3B8] hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;