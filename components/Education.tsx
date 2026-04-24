export const education = [
  {
    degree: "Bachelorgrad i IT og Informasjonssystemer",
    school: "Universitetet i Sørøst-Norge",
    period: "2023 – 2026",
    description:
      "Studiet gir et solid fundament innen programmering, databaser, systemutvikling og prosjektarbeid. Fokus på prosjektarbeid i grupper, webutvikling og Java-programmering. Fullstack-utvikling er et område jeg interesserer meg spesielt for, med mest erfaring fra Java, React og PostgreSQL.",
  },
  {
    degree: "Internship 30 studiepoeng",
    school: "Fellestjenester SA, siste semester",
    period: "Vår 2026",
    description:
      "Praktisk erfaring med oppsett og vedlikehold av Zabbix-server, konfigurering av gateways, og arbeid med proxyer på Windows og Linux. Har også testet meg litt frem innenfor IT-sikkerhet.",
  },
];

export function Education() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4" id="education">
      <ul className="space-y-6">
        {education.map((edu, idx) => (
          <li key={idx} className="border-l-2 border-border pl-5">
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <span className="text-lg font-semibold text-foreground">
                {edu.degree}
              </span>
              <span className="text-sm font-mono text-muted-foreground shrink-0">
                {edu.period}
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground mb-3">
              {edu.school}
            </div>
            <p className="text-base text-foreground leading-relaxed">
              {edu.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
