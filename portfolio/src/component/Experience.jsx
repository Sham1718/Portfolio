// src/components/Experience.jsx

const experiences = [
  {
    role: "B.E. Computer Engineering",
    company: "Wadia College of Engineering (SPPU)",
    period: "2022 – Present",
    description:
      "Focused on backend engineering, machine learning, blockchain, cybersecurity, and algorithm design. Achieved SGPA 9.15 in Semester 7.",
  },
  {
    role: "Backend Engineering Projects",
    company: "Independent Projects",
    period: "2024 – Present",
    description:
      "Built production-ready backend systems including RBAC authentication system (Spring Boot + JWT), Jira-style task manager, MERN expense tracker, and AI-based legal document summarizer using RAG.",
  },
  {
    role: "Self-Driven Backend Practice",
    company: "System Design & API Development",
    period: "Ongoing",
    description:
      "Practicing advanced backend concepts including caching strategies, rate limiting, secure API design, database indexing, and layered architecture.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-[#0B0F14] px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-sm font-medium text-neutral-500 dark:text-[#94A3B8] tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl font-bold text-black dark:text-white mt-2">
            Experience & Education
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-100 dark:bg-[#11161C] border border-neutral-200 dark:border-[#1F2933]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="font-bold text-black dark:text-white">
                  {exp.role}
                </h3>

                <span className="text-xs font-medium text-neutral-600 dark:text-[#94A3B8] bg-white dark:bg-[#161C23] px-3 py-1 rounded-full border border-neutral-200 dark:border-[#1F2933]">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {exp.company}
              </p>

              <p className="text-sm text-neutral-600 dark:text-[#94A3B8] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;