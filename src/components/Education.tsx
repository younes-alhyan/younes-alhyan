import { GraduationCap, Briefcase, Laptop, Calendar } from "lucide-react";

const education = [
  {
    title: "Independent Developer",
    source: "Self-Learning & Building Projects",
    description:
      "Focused on full-stack development, building personal projects, and mastering modern web technologies through hands-on practice.",
    period: "2023 - Present",
    icon: Briefcase,
    color: "cyan",
  },
  {
    title: "E-Business & Management",
    source: "EST (École Supérieure de Technologie)",
    period: "2024 - 2025",
    description:
      "Foundation in business processes, digital technologies, and management principles.",
    icon: GraduationCap,
    color: "amber",
  },
  {
    title: "Software Development",
    source: "1337 School",
    period: "Starting 2026",
    description:
      "Project-based program focused on programming fundamentals, algorithms, and real-world software development through peer learning.",
    icon: Laptop,
    color: "cyan",
  },
];

export default function Education() {
  return (
    <section className="relative flex flex-col items-center py-20 px-4 gap-4">
      <h1 className="mb-2 text-white/80 text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Experience & Education
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-muted-foreground text-lg text-center md:text-xl">
        A brief overview of my journey and learning path
      </p>
      <div className="w-full max-w-7xl flex flex-col gap-4">
        {education.map((ed) => {
          const Icon = ed.icon;
          const accentColor =
            ed.color === "amber"
              ? "border-amber-500/20 hover:border-amber-500/40"
              : "border-cyan-500/20 hover:border-cyan-500/40";
          const iconBg =
            ed.color === "amber"
              ? "bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-amber-500/30"
              : "bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border-cyan-500/30";
          const iconColor =
            ed.color === "amber" ? "text-amber-400" : "text-cyan-400";
          return (
            <div
              key={ed.title}
              className={`p-6 bg-card/50 backdrop-blur-sm border-2 ${accentColor} transition-all duration-300 hover:shadow-xl rounded-2xl group animate-on-scroll`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${iconBg} border shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div>
                      <h3 className="text-xl mb-1">{ed.title}</h3>
                      <p className="text-muted-foreground">{ed.source}</p>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/50 shrink-0`}
                    >
                      <Calendar className={`h-3.5 w-3.5 ${iconColor}`} />
                      <span className={`text-sm font-mono ${iconColor}`}>
                        {ed.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ed.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
