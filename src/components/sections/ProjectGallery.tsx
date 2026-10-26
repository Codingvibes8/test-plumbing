import Image from 'next/image';

export default function ProjectGallery() {
  const projects = [
    { title: "Luxury Wet Room & Sanitary Installation", area: "Windsor (SL4)", cat: "Bathroom Fit-out", img: "/images/shower.jpg", alt: "Luxury walk-in wet room with rainfall shower and dark stone tiling" },
    { title: "Combi Boiler Replacement & Magnetic Filter", area: "Slough (SL1)", cat: "Boiler Upgrade", img: "/images/engineer.jpg", alt: "ApexFlow engineer servicing a combi boiler with a headtorch" },
    { title: "Full System Power Flush & Designer Radiators", area: "Maidenhead (SL6)", cat: "Heating Maintenance", img: "/images/pipes.jpg", alt: "Freshly installed copper pipework laid out for a full system power flush" }
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Recent Projects</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-ink">Our Recent Work in Slough & Windsor</h3>
          <p className="text-body">Take a look at some of our recent boiler installations, bathroom refits, and heating updates.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="h-72 rounded-3xl bg-panel border border-line p-6 flex flex-col justify-end relative overflow-hidden group">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/30"></div>
              <div className="relative z-10 space-y-2">
                <span className="bg-blue-600 text-white font-bold text-[10px] px-2.5 py-1 rounded">{p.cat}</span>
                <h4 className="text-lg font-bold text-white">{p.title}</h4>
                <p className="text-xs text-slate-300">{p.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
