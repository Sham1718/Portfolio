// src/components/Hero.jsx
import { useTheme } from "../context/Context";

const Hero = () => {
  const { dark } = useTheme();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">
            👋 Hello, I'm
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Your <br />
            <span className="text-indigo-500">Name</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md">
            I build beautiful, fast, and scalable web applications.
            Passionate about clean code, great UX, and turning ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-colors duration-200"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-500 font-medium text-sm transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors text-sm font-medium"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors text-sm font-medium"
            >
              LinkedIn ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors text-sm font-medium"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Right - Avatar/Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl" />

            <div className="relative w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-4 border-indigo-500/30 flex items-center justify-center">
              <span className="text-7xl">🧑‍💻</span>
            </div>

            <div className="absolute top-4 -right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-2 shadow-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">2+ Years</p>
            </div>

            <div className="absolute bottom-4 -left-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-2 shadow-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">10+ Done</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;