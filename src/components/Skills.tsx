import { Code2, Database, Wrench, Layers } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    color: "amber",
    icon: Code2,
    tech_stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "cyan",
    icon: Database,
    tech_stack: ["Node.js", "Python", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    color: "amber",
    icon: Wrench,
    tech_stack: ["Docker", "Git", "Linux"],
  },
  {
    title: "Others",
    color: "cyan",
    icon: Layers,
    tech_stack: [
      "System Design",
      "Microservices",
      "REST APIs",
      "WebSockets",
      "Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative flex flex-col items-center py-20 px-4 gap-4">
      <h1 className="mb-2 text-white/80 text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Technical Arsenal
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-center md:text-xl text-muted-foreground">
        A comprehensive toolkit for building modern, scalable applications
      </p>
      <div className="w-full lg:w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category) => {
          const Icon = category.icon;
          const accentColor =
            category.color === "amber"
              ? "border-amber-500/20 hover:border-amber-500/40 hover:shadow-amber-500/10"
              : "border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10";
          const iconColor =
            category.color === "amber" ? "text-amber-500" : "text-cyan-500";

          return (
            <div
              key={category.title}
              className={`col-span-1 p-6 bg-card/50 backdrop-blur-sm border-2 ${accentColor} transition-all duration-300 hover:shadow-xl rounded-2xl group animate-on-scroll`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-linear-to-br ${
                    category.color === "amber"
                      ? "from-amber-500/10 to-amber-500/5"
                      : "from-cyan-500/10 to-cyan-500/5"
                  } border ${
                    category.color === "amber"
                      ? "border-amber-500/20"
                      : "border-cyan-500/20"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tech_stack.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-sm transition-colors border border-border/50 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
