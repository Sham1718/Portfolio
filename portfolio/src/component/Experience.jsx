import { motion } from "framer-motion";

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
      "Built production-ready backend systems including RBAC authentication system, Jira-style task manager, MERN expense tracker, and AI-based legal document summarizer using RAG.",
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
      className="py-24 bg-[#0B0F14] px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#94A3B8] tracking-widest uppercase">
            My Journey
          </span>

          <h2 className="text-4xl font-bold text-white mt-2">
            Experience & Education
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[#11161C] border border-[#1F2933] hover:bg-[#161C23] transition-colors"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">

                <h3 className="font-bold text-white text-lg">
                  {exp.role}
                </h3>

                <span className="text-xs font-medium text-[#94A3B8] bg-[#161C23] px-3 py-1 rounded-full border border-[#1F2933] self-start md:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-medium text-neutral-300 mb-3">
                {exp.company}
              </p>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {exp.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;