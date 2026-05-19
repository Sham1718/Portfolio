import { motion } from "framer-motion";

const skills = [
  {
    category: "Backend Engineering",
    items: [
      "Java",
      "Spring Boot",
      "Hibernate / JPA",
      "REST API Design",
      "JWT Authentication",
      "RBAC",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Database Indexing",
      "Query Optimization",
    ],
  },
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
  {
    category: "Python & AI Basics",
    items: ["Python", "Data Cleaning", "RAG Basics", "Basic AI Concepts"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
            What I Know
          </span>

          <h2 className="text-4xl font-bold text-white mt-2">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="bg-[#11161C] rounded-2xl p-6 border border-[#1F2933] hover:bg-[#161C23] transition-colors"
            >

              {/* Category */}
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                {group.category}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#161C23] text-[#94A3B8] border border-[#1F2933] hover:bg-[#1F2933]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;