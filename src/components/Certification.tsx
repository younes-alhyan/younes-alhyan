import { Award, CheckCircle2, BookOpen, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "CS50: Introduction to Computer Science",
    provider: "Harvard University",
    status: "completed",
    year: "2025",
    description:
      "Comprehensive introduction to computer science and programming",
    icon: Award,
    color: "amber",
    url: "https://certificates.cs50.io/6ae2e84d-7bca-4b46-b528-81891c1a6bdd.pdf?size=letter",
  },
  {
    title: "Frontend Development Certification",
    provider: "FreeCodeCamp",
    status: "completed",
    year: "2025",
    description:
      "Modern web development with React, responsive design, and best practices",
    icon: CheckCircle2,
    color: "cyan",
    url: "https://www.freecodecamp.org/certification/younes-alhyan/front-end-development-libraries",
  },
  {
    title: "Backend Development Certification",
    provider: "FreeCodeCamp",
    status: "completed",
    year: "2025",
    description: "Server-side development, APIs, databases, and authentication",
    icon: CheckCircle2,
    color: "amber",
    url: "https://www.freecodecamp.org/certification/younes-alhyan/back-end-development-and-apis",
  },
  {
    title: "1337 Certification",
    provider: "Self-Study & Practice",
    status: "ongoing",
    year: "2025",
    description:
      "Advanced algorithms, problem-solving, and peer learning methodologies",
    icon: BookOpen,
    color: "cyan",
    url: "https://1337.ma",
  },
];

export default function Certification() {
  return (
    <section className="relative flex flex-col items-center py-20 px-4 gap-4">
      <div className="flex items-center px-4 py-2 gap-2 rounded-full border border-amber-500/20 bg-amber-500/5">
        <Sparkles className="h-4 w-4 text-amber-400" />
        <span className="font-mono text-amber-400 text-sm">
          Self-Taught Journey
        </span>
      </div>
      <h1 className="mb-2 text-white/80 text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Learning & Certifications
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-muted-foreground text-lg text-center md:text-xl">
        Continuously expanding knowledge through structured courses and hands-on
        practice
      </p>

      <div className="relative w-full lg:w-5xl flex flex-col mt-8 gap-12">
        <div className="h-full w-0.5 absolute left-8 md:left-1/2 -translate-x-1/2 bg-linear-to-b from-amber-500/30 via-cyan-500/30 to-amber-500/30 z-0"></div>

        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          const isLeft = index % 2 === 0;
          const accentColor =
            cert.color === "amber"
              ? "border-amber-500/20 hover:border-amber-500/40"
              : "border-cyan-500/20 hover:border-cyan-500/40";
          const iconBg =
            cert.color === "amber"
              ? "bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-amber-500/30"
              : "bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border-cyan-500/30";
          const iconColor =
            cert.color === "amber" ? "text-amber-400" : "text-cyan-400";
          const badgeColor =
            cert.status === "completed"
              ? "bg-green-500/10 text-green-400 border-green-500/30"
              : "bg-blue-500/10 text-blue-400 border-blue-500/30";

          return (
            <div
              key={cert.title}
              className={`relative z-10 flex items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 bg-background md:bg-transparent`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 hidden md:flex">
                <div
                  className={`w-4 h-4 rounded-full ${
                    cert.color === "amber" ? "bg-amber-500" : "bg-cyan-500"
                  } ring-4 ring-background shadow-lg`}
                />
              </div>

              <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`flex items-start p-4 border-2 ${accentColor} rounded-2xl gap-4 group animate-on-scroll`}
                >
                  <div
                    className={`p-3 rounded-xl ${iconBg} border shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="text-lg hover:text-white/50 cursor-pointer"
                        onClick={() => window.open(cert.url, "_blank")}
                      >
                        {cert.title}
                      </h3>
                      <div
                        className={`px-2 py-1 rounded-2xl ${badgeColor} text-xs shrink-0`}
                      >
                        {cert.status === "completed"
                          ? "✓ Completed"
                          : "⟳ Ongoing"}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm font-mono text-foreground/80">
                        {cert.provider}
                      </span>
                      <span className="text-muted-foreground/50">•</span>
                      <span
                        className={`text-sm font-mono ${
                          cert.color === "amber"
                            ? "text-amber-400"
                            : "text-cyan-400"
                        }`}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
