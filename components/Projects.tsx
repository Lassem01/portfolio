const projects = [
  {
    category: "Studieprosjekt",
    name: "Discprof DiscGolf-app",
    description:
      "En disc golf-applikasjon der brukere kan utforske baner i Norge, spore resultater, se interaktive kart og få sanntids værdata for hver bane.",
    tags: ["React", "Node.js", "OpenLayers", "PostgreSQL"],
    github: "https://github.com/Lassem01/APP2000_G02_25",
  },
  {
    category: "Studieprosjekt",
    name: "Mini Search Engine",
    description:
      "En enkel søkemotor bygget i Java som indekserer og søker gjennom tekster.",
    tags: ["Java"],
    github: "https://github.com/Lassem01/Mini-search-engine",
  },
  {
    category: "Hobbyprosjekt",
    name: "Portefølje",
    description:
      "Min personlige portefølje og digitale CV, bygget med Next.js og TailwindCSS.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Lassem01/hjemmeside",
  },
];

const tagColors: Record<string, string> = {
  "Java": "bg-yellow-200 text-yellow-800",
  "React": "bg-cyan-200 text-cyan-800",
  "Node.js": "bg-green-200 text-green-800",
  "OpenLayers": "bg-blue-200 text-blue-800",
  "PostgreSQL": "bg-indigo-200 text-indigo-800",
  "Next.js": "bg-gray-200 text-gray-800",
  "TypeScript": "bg-blue-200 text-blue-800",
  "TailwindCSS": "bg-teal-200 text-teal-800",
};

export function Projects() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4" id="projects">
      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group border border-border rounded-2xl p-6 hover:border-foreground transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-0.5">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {project.name}
                </h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Se ${project.name} på GitHub`}
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border border-border text-foreground hover:bg-accent transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>

            <p className="text-base text-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-semibold border border-primary/20 ${tagColors[tag] ?? "bg-gray-200 text-gray-800"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
