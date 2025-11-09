import { useState, useRef, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [headerText, setHeaderText] = useState("");
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;
    hasTyped.current = true;

    const text = "Younes Alhyan";

    async function type() {
      for (const c of text) {
        setHeaderText((prev) => prev + c);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    type();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Content*/}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
          <span className="font-mono text-amber-400">
            console.log("Hello, World!")
          </span>
        </div>

        <h1 className="mb-2 text-center text-white/80 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
          {headerText}
          <span className="blink">_</span>
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-xl text-center md:text-2xl text-muted-foreground">
          Full-Stack Software Engineer building scalable systems and elegant
          user experiences
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="flex items-center px-4 py-2 gap-2 text-black bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105 shadow-lg shadow-amber-500/20 rounded-xl transition-all duration-300 ease-out group cursor-pointer animate-on-scroll"
            onClick={() => {
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="flex items-center px-4 py-2 gap-2 bg-white/2 outline-1 outline-white/10 hover:bg-accent hover:scale-105 rounded-xl transition-all duration-300 ease-out cursor-pointer animate-on-scroll"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "Younes_Alhyan_CV.pdf";
              link.click();
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 ">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
