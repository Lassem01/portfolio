export function About() {
  const images = [
    { src: "/img1.jpg", alt: "Bilde 1" },
    { src: "/img2.jpg", alt: "Bilde 2" },
    { src: "/img3.jpg", alt: "Bilde 3" },
  ];

  return (
    <section className="max-w-2xl mx-auto py-8 px-4" id="about">

           {/* Bildestripe */}
      <div className=" grid grid-cols-3 gap-3 mb-11">
        {images.map((img) => (
          <div
            key={img.src}
            className="aspect-square rounded-xl overflow-hidden border border-border bg-muted"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="space-y-5 text-lg text-foreground leading-relaxed">
        <p>
          Jeg er sosial, nysgjerrig og trives like godt med å jobbe selvstendig
          som i team. Jeg setter pris på veiledning fra erfarne kolleger og liker
          å ta ansvar for at ting blir gjort skikkelig. Jeg elsker utfordringer, 
          både fysiske og mentale og er alltid motivert for å lære noe nytt.
        </p>
        <p>
          På fritiden er jeg glad i
          klatring, turer i naturen og å holde meg aktiv.
          Jeg liker også å ta det med ro en gang i blant og da pleier jeg å
          se på film, spille på pc eller lese bøker.
        </p>

        <p className="text-foreground font-medium">
          Jeg søker nå jobb innen backend, fullstack, eller frontendutvikler og er klar
          for å starte etter endt studie sommeren 2026.
        </p>
      </div>
    </section>
  );
}

