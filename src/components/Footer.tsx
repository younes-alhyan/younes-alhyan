import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/younes-alhyan",
    color: "amber-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/younes-alhyan",
    color: "cyan-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:younesalhyan@gmail.com",
    color: "amber-400",
  },
];

export default function Footer() {
  return (
    <footer className="className=py-12 px-4 py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const borderHover = `border-${link.color}`;
              const textHover = `text-${link.color}`;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-muted/30 border  hover:${borderHover} hover:scale-110 transition-all duration-300 group`}
                  aria-label={link.label}
                >
                  <Icon
                    className={`h-5 w-5 text-background transition-colors duration-300 group-hover:${textHover}`}
                  />
                </a>
              );
            })}
          </div>

          <div className="w-xs h-0.5 bg-white/5"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center">
              Made with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              by Younes
            </p>
            <p className="text-muted-foreground/60 text-xs font-mono">
              © 2025 Younes. All rights reserved.
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-muted/20">
            <span className="text-xs text-muted-foreground">Built with</span>
            <span className="text-xs font-mono bg-linear-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              React + TypeScript + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
