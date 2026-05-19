import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0B0F14] px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-full h-96 rounded-2xl bg-[#11161C] border border-[#1F2933] flex items-center justify-center">

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl"
            >
              🧑‍💻
            </motion.span>

          </div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-[#161C23] border border-[#1F2933] rounded-xl px-6 py-4 shadow-sm"
          >
            <p className="text-2xl font-bold text-white">
              Fresher
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-medium text-[#94A3B8] tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl font-bold text-white">
            Who I Am
          </h2>

          <p className="text-[#94A3B8] leading-relaxed">
            I'm a backend-focused engineer passionate about building scalable,
            secure systems. I enjoy solving complex problems and designing clean,
            maintainable architectures.
          </p>

          <p className="text-[#94A3B8] leading-relaxed">
            My work centers around API development, authentication systems,
            database optimization, and performance-driven backend solutions.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-6 mt-2">
            {[
              { label: "Name", value: "Shyam Bharaskar" },
              { label: "Email", value: "sbharaskar8485@gmail.com" },
              { label: "Location", value: "Pune, India" },
              { label: "Available", value: "Full-time / Freelance" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider">
                  {item.label}
                </p>

                <p className="text-sm font-medium text-white mt-1">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-4 self-start px-6 py-3 rounded-full bg-white text-black hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;