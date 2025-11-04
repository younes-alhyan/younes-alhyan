import { Code, Coffee, Rocket, Terminal } from "lucide-react";

const interests = [
  { icon: Code, label: "Clean Code" },
  { icon: Terminal, label: "System Design" },
  { icon: Rocket, label: "Innovation" },
  { icon: Coffee, label: "Problem Solving" },
];

export default function About() {
  return (
    <section className="relative flex flex-col items-center py-20 px-4 gap-12 lg:gap-24">
      <h1 className="mb-2 text-white/80 text-4xl md:text-5xl lg:text-6xl tracking-tight">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8 md:p-12 w-full max-w-6xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-amber-500/30 transition-all duration-300 rounded-2xl animate-on-scroll">
        <div className="w-32 lg:w-64 aspect-square p-1 border-2 border-amber-500/20 shadow-xl shadow-amber-500/10 ring-4 ring-background rounded-full overflow-hidden">
          <img
            src="./public/icon.jpg"
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl text-center lg:text-start">Younes Alhyan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-center lg:text-start">
                I'm a passionate full-stack software engineer with a deep love
                for building scalable, performant systems and crafting intuitive
                user experiences. With expertise spanning modern frontend
                frameworks to distributed backend architectures, I thrive on
                solving complex technical challenges.
              </p>
              <p className="text-center lg:text-start">
                My journey in software development has taught me that the best
                solutions emerge from a combination of solid engineering
                principles, creative problem-solving, and continuous learning.
                I'm particularly interested in system design, performance
                optimization, and developer tooling.
              </p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-white/5 rounded-full my-8"></div>
          <p className="text-center lg:text-start">What drives me:</p>
          <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4 mt-4 ">
            {interests.map((i) => (
              <div
                key={i.label}
                className="flex items-center px-4 py-2 gap-2 rounded-xl bg-linear-to-br from-amber-500/10 to-cyan-500/10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <i.icon className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <p className="text-sm">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
