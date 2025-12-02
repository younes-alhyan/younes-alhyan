import { Github, ExternalLink } from "lucide-react";
import ConvertingpdfImage from "../assets/convertingpdf.png";
import WeatherAppImage from "../assets/weather-app.png";
import CSTImage from "../assets/cst.png";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather app built with React and TypeScript, featuring search functionality, unit conversion, and detailed forecasts powered by the Open-Meteo API. Demonstrates frontend development skills including API integration, dynamic data rendering, and modern styling with Tailwind CSS.",
    image: WeatherAppImage,
    tech: ["React", "TypeScript", "Tailwind", "API"],
    color: "amber",
    live: "https://younes-alhyan.github.io/weather-app",
    source: "https://github.com/younes-alhyan/weather-app",
  },
  {
    title: "ConvertingPDF",
    description:
      "A PDF conversion tool where I implemented the backend and backend integration using Python, Flask, Supabase, and Docker. The project handles file uploads, processing, and storage, demonstrating my ability to build robust server-side logic and integrate with cloud services. The frontend was partially handled to connect with the backend endpoints.",
    image: ConvertingpdfImage,
    tech: ["Python", "Flask", "Supabase", "Docker"],
    color: "cyan",
    live: "https://lamgaldam-tech.github.io/convertingpdf/",
    source: "https://github.com/lamgaldam-tech/convertingpdf-server",
  },
  {
    title: "CST (Club Scientifique et Technologique)",
    description:
      "A web platform for managing activities and members of the CST club. I worked on the backend and backend integration using Node.js, MongoDB, and Express, implementing APIs, authentication, and database management. The frontend consumes these endpoints to display club data dynamically.",
    image: CSTImage,
    tech: ["Node.js", "MongoDB", "Express"],
    color: "amber",
    live: "https://cst-web.github.io/CST/",
    source: "https://github.com/CST-web",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center py-20 px-4 gap-4"
    >
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
