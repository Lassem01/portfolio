"use client";
import { useState } from "react";

export function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      className="max-w-2xl mx-auto px-4 pt-14 pb-8 flex flex-col sm:flex-row items-center sm:items-start gap-8"
      id="hero"
    >
      {/* Tekst-kolonne */}
      <div className="flex-1 text-left">
        <p className="text-sm uppercase tracking-widest text-foreground mb-3 font-mono">
          IT student · Fullstack
        </p>
        <h1 className="text-5xl font-semibold mb-5 leading-tight tracking-tight text-foreground">
          Lasse Mostuen
        </h1>
        <p className="text-xl text-foreground mb-7 leading-relaxed max-w-sm">
          Jeg er Lasse Mostuen, 24 år, og fullfører til sommeren en bachelorgrad i
          IT og informasjonssystemer ved Universitetet i Sørøst-Norge.
        </p>

        {/* Knapper */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium border border-border text-foreground bg-background hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Kontakt meg
          </button>

          <a
            href="https://github.com/Lassem01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gå til Lasse Mostuens GitHub-profil"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium border border-border text-foreground bg-background hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
            Min GitHub
          </a>
        </div>
      </div>

      {/* Bilde-kolonne */}
      <div className="flex flex-col items-center shrink-0 mt-8">
        <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
          <img
            src="/CVbilde.JPG"
            alt="Profilbilde av Lasse Mostuen"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Kontakt-modal */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-background rounded-xl shadow-2xl p-8 max-w-md w-full relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-xl text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setShowContact(false)}
              aria-label="Lukk kontaktboks"
            >
              ×
            </button>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Kontaktinformasjon
            </h3>
            <ul className="text-base text-foreground space-y-2 mb-3">
              <li>
                <span className="font-medium">E-post: </span>
                <a
                  href="mailto:lassemostuen@gmail.com"
                  className="underline underline-offset-2 hover:opacity-70 transition-colors"
                >
                  lassemostuen@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/lasse-mostuen-64a820320/"
                  className="underline underline-offset-2 hover:opacity-70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/lasse-mostuen
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Du finner også kontaktinfo nederst på siden.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
