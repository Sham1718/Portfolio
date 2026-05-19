import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#0B0F14] px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >

          <span className="text-sm font-medium text-[#94A3B8] tracking-widest uppercase">
            Hello, I'm
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Shyam <br />
            <span className="text-neutral-300">
              Bharaskar
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-[#94A3B8]">
            Backend-Focused Engineer
          </h2>

          <p className="text-[#94A3B8] text-base leading-relaxed max-w-md">
            I design and build scalable backend systems, secure APIs,
            and performance-driven web applications with clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 rounded-full bg-white text-black hover:opacity-90 transition-opacity text-sm font-medium"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 rounded-full border border-[#1F2933] text-white hover:bg-[#161C23] transition-colors text-sm font-medium"
            >
              Contact
            </motion.a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">

            <motion.a
              href="https://github.com/Sham1718"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shyambharaskar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              Resume
            </motion.a>

          </div>
        </motion.div>

        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Main Circle */}
            <div className="relative w-full h-full rounded-full bg-[#11161C] border border-[#1F2933] flex items-center justify-center">

              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-7xl"
              >
                🧑‍💻
              </motion.span>

            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-6 -right-6 bg-[#161C23] border border-[#1F2933] rounded-xl px-4 py-2 shadow-sm"
            >
              <p className="text-xs text-[#94A3B8]">
                Experience
              </p>

              <p className="text-sm font-bold text-white">
                Fresher
              </p>
            </motion.div>

            {/* Projects Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-6 -left-6 bg-[#161C23] border border-[#1F2933] rounded-xl px-4 py-2 shadow-sm"
            >
              <p className="text-xs text-[#94A3B8]">
                Projects
              </p>

              <p className="text-sm font-bold text-white">
                10+
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;