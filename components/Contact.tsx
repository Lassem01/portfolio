export function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:lassemostuen@gmail.com"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-accent transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          lassemostuen@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/lasse-mostuen-64a820320/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-accent transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          linkedin.com/in/lasse-mostuen
        </a>
      </div>
    </section>
  );
}
