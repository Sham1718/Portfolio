const projects = [
  {
    title: "Advanced RBAC System",
    description:
      "Designed and implemented a role-based access control system using Spring Boot and JWT authentication. Built dynamic role-permission mapping, secured REST APIs with authorization filters, and implemented token validation with expiry handling.",
    tech: ["Java", "Spring Boot", "Hibernate", "JWT", "MySQL"],
    github: "https://github.com/Sham1718/rbac-system",
    live:null,
    color: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "Jira-Style Task Management System",
    description:
      "Built a backend-driven project management system with task creation, assignment, status workflows, and authentication. Implemented layered architecture, REST APIs, and optimized database queries for task filtering and performance.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    github: "https://github.com/Sham1718/Bug-Tracker",
    live: null,
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "MERN Expense Tracker",
    description:
      "Developed a full-stack expense tracking application with JWT authentication, categorized transactions, analytics dashboard, and secure API endpoints. Deployed backend on Render and frontend on Vercel.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Sham1718/expense-tracker",
    live: "https://expense-tracker-rz5r.vercel.app/",
    color: "from-orange-500/10 to-rose-500/10",
  },
  {
    title: "Legal Document Summarizer (RAG-based)",
    description:
      "Built an AI-powered legal document summarizer using Python and Retrieval-Augmented Generation (RAG). Implemented text preprocessing, data cleaning, embedding generation, and contextual retrieval for accurate summaries.",
    tech: ["Python", "RAG", "NLP", "Data Cleaning", "AI"],
    github: "https://github.com/Sham1718/Legal-Document-Summarizer-",
    live: null,
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
                {project.live&&
                <a href={project.live} target="_blank" rel="noreferrer"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                  Live Demo ↗
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;