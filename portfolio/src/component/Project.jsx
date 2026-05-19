import { motion } from "framer-motion";

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
      className="py-24 bg-[#0B0F14] px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#94A3B8] tracking-widest uppercase">
            My Work
          </span>

          <h2 className="text-4xl font-bold text-white mt-2">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 bg-[#11161C] border border-[#1F2933] hover:bg-[#161C23] transition-colors duration-300"
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#161C23] text-[#94A3B8] border border-[#1F2933]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-sm font-medium">

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  GitHub
                </motion.a>

                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="text-[#94A3B8] hover:text-white transition-colors"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;