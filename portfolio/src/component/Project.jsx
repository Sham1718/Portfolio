const projects = [
  {
    title: "Project One",
    description: "A full stack web app built with React and Node.js. Features authentication, real-time updates, and a clean UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with cart, payments, and admin dashboard built with Next.js.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Project Three",
    description: "A real-time chat application with rooms, notifications, and file sharing.",
    tech: ["React", "Socket.io", "Express", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-orange-500/10 to-rose-500/10",
  },
  {
    title: "Project Four",
    description: "A personal finance tracker with charts, budgeting tools, and CSV export.",
    tech: ["React", "Chart.js", "Node.js", "MySQL"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-blue-500/10 to-cyan-500/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">My Work</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div
              key={project.title}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${project.color} border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-indigo-500/50 transition-all duration-300 group`}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                  GitHub ↗
                </a>
                <a href={project.live} target="_blank" rel="noreferrer"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;