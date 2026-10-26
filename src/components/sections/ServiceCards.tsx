import Image from 'next/image';
import { Droplets, Flame, Thermometer, Bath, ChevronRight } from 'lucide-react';

export default function ServiceCards() {
  const services = [
    { title: "Emergency Leak Repairs", desc: "Burst pipes, hidden leaks, dripping taps, and overflow issues resolved quickly.", icon: Droplets, badge: "Rapid Callout", img: "/images/valve.jpg", alt: "Copper pipework with a leaking isolation valve" },
    { title: "Boiler Installation & Servicing", desc: "A-rated energy efficient boilers, annual safety checks, and fault diagnostics.", icon: Flame, badge: "Gas Safe Reg", img: "/images/boiler.jpg", alt: "Gas Safe engineer testing a BAXI boiler with a multimeter" },
    { title: "Central Heating & Radiators", desc: "Power flushing, radiator balancing, thermostat upgrades, and maintenance.", icon: Thermometer, badge: "Efficiency Boost", img: "/images/pipework.jpg", alt: "Copper heating pipes and valves fitted against a dark wall" },
    { title: "Bathroom & Tap Plumbing", desc: "Full bathroom renovations, sanitary fitting, shower repairs, and tap fitting.", icon: Bath, badge: "Expert Fitters", img: "/images/tap.jpg", alt: "Brushed bronze bathroom tap running water into a stone basin" }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Our Professional Services</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-ink">Expert Plumbing, Heating & Gas Solutions</h3>
          <p className="text-body">Equipped for any residential or commercial issue with upfront pricing and guaranteed workmanship.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-panel border border-line hover:border-blue-500 rounded-3xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 -mt-10 relative rounded-2xl bg-blue-600 border border-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-ink">{s.title}</h4>
                  <p className="text-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 mt-auto border-t border-line flex items-center justify-between">
                <span className="text-xs font-semibold text-success">{s.badge}</span>
                <span className="text-sm font-bold text-accent flex items-center gap-1 cursor-pointer">
                  Book Now <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
