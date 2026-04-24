const skills = [
	// Språk
	{ name: "Java", color: "bg-yellow-200 text-yellow-800" },
	{ name: "TypeScript", color: "bg-blue-200 text-blue-800" },
	// Rammeverk/Biblioteker
	{ name: "React", color: "bg-cyan-200 text-cyan-800" },
	{ name: "Next.js", color: "bg-gray-200 text-gray-800" },
	{ name: "TailwindCSS", color: "bg-teal-200 text-teal-800" },
	{ name: "Node.js", color: "bg-green-200 text-green-800" },
	// Databaser
	{ name: "PostgreSQL", color: "bg-indigo-200 text-indigo-800" },
	{ name: "MySQL", color: "bg-sky-200 text-sky-800" },
	// Programvare/Verktøy
	{ name: "Git", color: "bg-orange-200 text-orange-800" },
	{ name: "Figma", color: "bg-pink-200 text-pink-800" },
	{ name: "Visual Paradigm", color: "bg-purple-200 text-purple-800" },
	{ name: "Vercel", color: "bg-gray-300 text-gray-900" },
	{ name: "Zabbix", color: "bg-red-200 text-red-800" },
	{ name: "Linux", color: "bg-lime-200 text-lime-800" },
	// Annet
	{ name: "Agile/SCRUM", color: "bg-amber-200 text-amber-800" },
];

export function Skills() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="skills">
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Ferdigheter
			</h2>
			<p className="text-base text-muted-foreground text-center mb-4">
				Her er et utvalg av teknologier, verktøy og metoder jeg har erfaring med fra studier, prosjekter og hobbyarbeid.
			</p>
			<div className="space-y-6">
				<ul className="flex flex-wrap gap-3 justify-center mb-4">
					{skills.map((skill) => (
						<li
							key={skill.name}
							className={`px-4 py-2 rounded-full font-semibold shadow-md border border-primary/20 hover:scale-105 hover:shadow-xl transition-all duration-200 text-base ${skill.color}`}
						>
							{skill.name}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
