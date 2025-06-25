const Skills = () => {
  return (
    <section id="skills" className="bg-white py-6 mb-3">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Frontend */}
          <div>
            <h3
              className="text-xl

 font-semibold mb-2 text-center text-blue-700"
            >
              Frontend
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "HTML",
                "JavaScript",
                "TypeScript",
                "React",
                "Tailwind CSS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white px-2 py-1 rounded shadow text-center border border-gray-200 text-lg text-gray-900 hover:scale-105 transition-transform hover:cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div>
            <h3
              className="text-xl

 font-semibold mb-2 text-center text-green-700"
            >
              Backend
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "NodeJS",
                "MERN",
                "REST APIs",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white px-2 py-1 rounded shadow text-center border border-gray-200 text-base text-gray-900 hover:scale-105 transition-transform hover:cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Other */}
          <div>
            <h3
              className="text-xl

 font-semibold mb-2 text-center text-purple-700"
            >
              Other
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "Git",
                "JIRA",
                "Agile Methodology",
                "Testing (Mocha-Chai)",
                "CI/CD",
                "Linux",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white px-2 py-1 rounded shadow text-center border border-gray-200 text-base text-gray-900 hover:scale-105 transition-transform hover:cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
