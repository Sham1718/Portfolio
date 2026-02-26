const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST API", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(group => (
            <div
              key={group.category}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
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