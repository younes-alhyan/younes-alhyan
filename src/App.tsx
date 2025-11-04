import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Education from "./components/Education";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [currentSection, setCurrentSection] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    function getCurrentSection(): HTMLElement | null {
      let current: HTMLElement | null = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = section;
        }
      });
      return current;
    }

    const onScroll = () => {
      const section = getCurrentSection();
      if (section) setCurrentSection(section);
    };

    window.addEventListener("scroll", onScroll);

    // Initial check
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of the element is visible
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!currentSection) return;

    const sections = Array.from(document.querySelectorAll("section"));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const currentIndex = sections.indexOf(currentSection);
        let targetIndex = currentIndex;

        if (e.key === "ArrowDown") {
          e.preventDefault();
          targetIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          targetIndex = Math.max(currentIndex - 1, 0);
        }
        const targetSection = sections[targetIndex];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-background">
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-amber-500/3 to-cyan-500/3 rounded-full blur-3xl" />
      </div>
      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certification />
        <Education />
        <About />
      </main>

      <Footer />
    </div>
  );
}
