import { useTheme } from "../context/Context";

const Hero = () => {
  const { dark } = useTheme();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0B0F14] px-6 pt-20 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - Text */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-neutral-500 dark:text-[#94A3B8] tracking-widest uppercase">
            Hello, I'm
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
            Shyam <br />
            <span className="text-neutral-700 dark:text-neutral-300">
              Bharaskar
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-[#94A3B8]">
            Backend-Focused Engineer
          </h2>

          <p className="text-neutral-600 dark:text-[#94A3B8] text-base leading-relaxed max-w-md">
            I design and build scalable backend systems, secure APIs,
            and performance-driven web applications with clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity text-sm font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-neutral-300 dark:border-[#1F2933] text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-[#161C23] transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/Sham1718"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shyambharaskar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right - Minimal Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            <div className="relative w-full h-full rounded-full bg-neutral-200 dark:bg-[#11161C] border border-neutral-300 dark:border-[#1F2933] flex items-center justify-center">
              <span className="text-7xl">🧑‍💻</span>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-6 -right-6 bg-white dark:bg-[#161C23] border border-neutral-300 dark:border-[#1F2933] rounded-xl px-4 py-2 shadow-sm">
              <p className="text-xs text-neutral-500 dark:text-[#94A3B8]">
                Experience
              </p>
              <p className="text-sm font-bold text-black dark:text-white">
                Fresher
              </p>
            </div>

            {/* Projects Badge */}
            <div className="absolute bottom-6 -left-6 bg-white dark:bg-[#161C23] border border-neutral-300 dark:border-[#1F2933] rounded-xl px-4 py-2 shadow-sm">
              <p className="text-xs text-neutral-500 dark:text-[#94A3B8]">
                Projects
              </p>
              <p className="text-sm font-bold text-black dark:text-white">
                7+
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;