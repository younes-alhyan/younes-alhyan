import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Product Page",
    description:
      "A responsive e-commerce product page built with React, featuring a lightbox product gallery, interactive cart functionality, and smooth user interactions. This project demonstrates modern frontend skills including component-driven development, state management, and responsive design.",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/v1715958959/Challenges/nnhmflkuam4gr1dnnddf.jpg",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    color: "amber",
    live: "https://github.com/younes-alhyan/e-commerce-product-page",
    source: "https://younes-alhyan.github.io/e-commerce-product-page",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app built with React and TypeScript, featuring search functionality, unit conversion, and detailed forecasts powered by the Open-Meteo API. Demonstrates API integration, dynamic data rendering, and modern frontend styling with Tailwind CSS.",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/Challenges/go73d9rjvzc8fsw13hy8.jpg",
    tech: ["React", "TypeScript", "Tailwind", "API"],
    color: "cyan",
    live: "https://github.com/younes-alhyan/weather-app",
    source: "https://younes-alhyan.github.io/weather-app",
  },
  {
    title: "IP Address Tracker",
    description:
      "An IP Address Tracking app built with Node.js, using multiple APIs to fetch and display location and network details. The project showcases API integration, dynamic data handling, and responsive frontend design.",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/Challenges/ld4kxbjoxpqpjenak8w6.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "API"],
    color: "amber",
    live: "https://github.com/younes-alhyan/ip-address-tracker",
    source: "https://younes-alhyan.github.io/ip-address-tracker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative flex flex-col items-center py-20 px-4 gap-4">
      <h1 className="mb-2 text-white/80 text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Featured Projects
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-muted-foreground text-lg text-center md:text-xl">
        A selection of projects showcasing my technical expertise and
        problem-solving abilities
      </p>

      <div className="w-full lg:w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const accentColor =
            project.color === "amber"
              ? "border-amber-500/20 group-hover:border-amber-500/40"
              : "border-cyan-500/20 group-hover:border-cyan-500/40";
          const gradientOverlay =
            project.color === "amber"
              ? "from-amber-500/20 to-transparent"
              : "from-cyan-500/20 to-transparent";

          return (
            <div
              key={project.title}
              className={`flex flex-col col-span-1 ${
                index === 0 ? "lg:col-span-2" : ""
              } border-2  ${accentColor} rounded-2xl transition-all duration-300 overflow-hidden gap-4`}
            >
              <div className="relative flex flex-1 overflow-hidden group">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="group-hover:scale-110 transition-all duration-300 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors cursor-pointer">
                    <Github
                      className="h-4 w-4"
                      onClick={() => window.open(project.source, "_blank")}
                    />
                  </button>
                  <button className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors cursor-pointer">
                    <ExternalLink
                      className="h-4 w-4"
                      onClick={() => window.open(project.live, "_blank")}
                    />
                  </button>
                </div>
              </div>

              <p className="text-white/80 text-2xl mt-8 px-4">
                {project.title}
              </p>
              <p className="text-muted-foreground px-4">
                {project.description}
              </p>
              <div className="flex items-center gap-2 p-4">
                {project.tech.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg ${
                      project.color === "amber"
                        ? "bg-amber-700/10"
                        : "bg-cyan-700/10"
                    } text-sm transition-colors border ${accentColor} font-mono`}
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
