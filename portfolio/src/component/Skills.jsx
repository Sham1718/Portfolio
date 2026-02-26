// src/components/Skills.jsx
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
      className="py-24 bg-white dark:bg-[#0B0F14] px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-neutral-500 dark:text-[#94A3B8] tracking-widest uppercase">
            What I Know
          </span>
          <h2 className="text-4xl font-bold text-black dark:text-white mt-2">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-neutral-100 dark:bg-[#11161C] rounded-2xl p-6 border border-neutral-200 dark:border-[#1F2933]"
            >
              <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-widest mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-[#161C23] text-neutral-700 dark:text-[#94A3B8] border border-neutral-200 dark:border-[#1F2933] hover:bg-neutral-200 dark:hover:bg-[#1F2933] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;