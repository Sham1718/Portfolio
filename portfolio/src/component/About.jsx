const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - Image */}
        <div className="relative">
          <div className="w-full h-96 rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
            <span className="text-8xl">🧑‍💻</span>
          </div>

          <div className="absolute -bottom-5 -right-5 bg-indigo-500 text-white rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs">Years Experience</p>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Who I Am
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Developer who loves building modern web applications.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, I'm exploring new technologies, contributing to open source,
            or learning something new every day.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: "Name", value: "Shyam Bharaskar" },
              { label: "Email", value: "sbharaskar8485@gmail.com" },
              { label: "Location", value: "Pune , India" },
              { label: "Available", value: "Freelance / Full-time" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-0.5">
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
            className="mt-2 self-start px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
          >
            Download Resume ↓
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;