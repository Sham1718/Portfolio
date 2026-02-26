// src/components/Projects.jsx

const projects = [
  {
    title: "Advanced RBAC System",
    description:
      "Designed and implemented a role-based access control system using Spring Boot and JWT authentication. Built dynamic role-permission mapping, secured REST APIs with authorization filters, and implemented token validation with expiry handling.",
    tech: ["Java", "Spring Boot", "Hibernate", "JWT", "MySQL"],
    github: "https://github.com/Sham1718/rbac-system",
    live: null,
  },
  {
    title: "Jira-Style Task Management System",
    description:
      "Built a backend-driven project management system with task creation, assignment, status workflows, and authentication. Implemented layered architecture, REST APIs, and optimized database queries for task filtering and performance.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    github: "https://github.com/Sham1718/Bug-Tracker",
    live: null,
  },
  {
    title: "MERN Expense Tracker",
    description:
      "Developed a full-stack expense tracking application with JWT authentication, categorized transactions, analytics dashboard, and secure API endpoints. Deployed backend on Render and frontend on Vercel.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Sham1718/expense-tracker",
    live: "https://expense-tracker-rz5r.vercel.app/",
  },
  {
    title: "Legal Document Summarizer (RAG-based)",
    description:
      "Built an AI-powered legal document summarizer using Python and Retrieval-Augmented Generation (RAG). Implemented text preprocessing, data cleaning, embedding generation, and contextual retrieval for accurate summaries.",
    tech: ["Python", "RAG", "NLP", "Data Cleaning", "AI"],
    github: "https://github.com/Sham1718/Legal-Document-Summarizer-",
    live: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0B0F14] px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-sm font-medium text-neutral-500 dark:text-[#94A3B8] tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-black dark:text-white mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl p-6 bg-neutral-100 dark:bg-[#11161C] border border-neutral-200 dark:border-[#1F2933] hover:dark:bg-[#161C23] transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-[#94A3B8] leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-[#161C23] text-neutral-700 dark:text-[#94A3B8] border border-neutral-200 dark:border-[#1F2933]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-[#94A3B8] hover:text-black dark:hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;