export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Protopie"],
    },
    {
      title: "Design Disciplines",
      skills: [
        "UI Design",
        "UX Strategy",
        "Interaction Design",
        "Design Systems",
      ],
    },
    {
      title: "Specializations",
      skills: [
        "Mobile Design",
        "Web Design",
        "App Design",
        "Responsive Design",
      ],
    },
    {
      title: "Process & Methods",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground/70 text-sm flex items-center gap-2 group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover/item:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
