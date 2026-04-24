"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";

const tabs = [
	{ name: "Om meg", component: <About /> },
	{ name: "Utdanning", component: <Education /> },
	{ name: "Ferdigheter", component: <Skills /> },
	{ name: "Prosjekter", component: <Projects /> },
];

export default function HomeAnimated() {
	const [selected, setSelected] = useState(0);
	return (
		<main>
			<Hero />
			<div className="max-w-2xl mx-auto px-4">

				{/* Tab-navigasjon — matcher hero-stilen */}
				<div className="flex gap-6 border-b border-border mb-8">
					{tabs.map((tab, idx) => (
						<button
							key={tab.name}
							onClick={() => setSelected(idx)}
							className={`pb-3 text-xs uppercase tracking-widest font-mono transition-colors focus:outline-none border-b-2 -mb-px ${
								selected === idx
									? "border-foreground text-foreground"
									: "border-transparent text-muted-foreground hover:text-foreground"
							}`}
						>
							{tab.name}
						</button>
					))}
				</div>

				<div className="relative min-h-[400px] flex flex-col">
					<AnimatePresence mode="wait">
						<motion.div
							key={selected}
							initial={{ y: 16, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 16, opacity: 0 }}
							transition={{ duration: 0.25, ease: "easeInOut" }}
							style={{ position: "relative" }}
							className="w-full"
						>
							{tabs[selected].component}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			<footer className="w-full border-t border-border mt-12 py-8 bg-background text-center relative z-10">
				<Contact />
			</footer>
		</main>
	);
}
