// src/components/About.jsx
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0B0F14] px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - Visual */}
        <div className="relative">
          <div className="w-full h-96 rounded-2xl bg-neutral-200 dark:bg-[#11161C] border border-neutral-300 dark:border-[#1F2933] flex items-center justify-center">
            <span className="text-8xl">🧑‍💻</span>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#161C23] border border-neutral-300 dark:border-[#1F2933] rounded-xl px-6 py-4 shadow-sm">
            <p className="text-2xl font-bold text-black dark:text-white">
              Fresher
            </p>
          
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-neutral-500 dark:text-[#94A3B8] tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl font-bold text-black dark:text-white">
            Who I Am
          </h2>

          <p className="text-neutral-600 dark:text-[#94A3B8] leading-relaxed">
            I'm a backend-focused engineer passionate about building scalable,
            secure systems. I enjoy solving complex problems and designing clean,
            maintainable architectures.
          </p>

          <p className="text-neutral-600 dark:text-[#94A3B8] leading-relaxed">
            My work centers around API development, authentication systems,
            database optimization, and performance-driven backend solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-2">
            {[
              { label: "Name", value: "Shyam Bharaskar" },
              { label: "Email", value: "sbharaskar8485@gmail.com" },
              { label: "Location", value: "Pune, India" },
              { label: "Available", value: "Full-time / Freelance" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-neutral-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-black dark:text-white mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-4 self-start px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;