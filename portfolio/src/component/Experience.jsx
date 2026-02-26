const experiences = [
  {
    role: "B.E. Computer Engineering",
    company: "Wadia College of Engineering (SPPU)",
    period: "2019 – present",
    description:
      "Focused on backend engineering, machine learning, blockchain, cybersecurity, and algorithm design. Achieved SGPA 9.15 in Semester 7.",
    type: "edu",
  },
  {
    role: "Backend Engineering Projects",
    company: "Independent Projects",
    period: "2024 – Present",
    description:
      "Built production-ready backend systems including RBAC authentication system (Spring Boot + JWT), Jira-style task manager, MERN expense tracker, and AI-based legal document summarizer using RAG.",
    type: "work",
  },
  {
    role: "Self-Driven Backend Practice",
    company: "System Design & API Development",
    period: "Ongoing",
    description:
      "Practicing advanced backend concepts including caching strategies, rate limiting, secure API design, database indexing, and layered architecture.",
    type: "work",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Experience & Education</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="pl-12 relative">
                {/* Dot */}
                <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-sm
                  ${exp.type === "work"
                    ? "bg-indigo-500/10 border-2 border-indigo-500 text-indigo-500"
                    : "bg-emerald-500/10 border-2 border-emerald-500 text-emerald-500"}`}>
                  {exp.type === "work" ? "💼" : "🎓"}
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <span className="text-xs text-indigo-500 font-medium bg-indigo-500/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-indigo-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;