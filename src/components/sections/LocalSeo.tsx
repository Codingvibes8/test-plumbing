import { MapPin, Truck } from 'lucide-react';

export default function LocalSeo() {
  const areas = [
    { name: "Slough", postcodes: "SL1, SL2, SL3" },
    { name: "Windsor", postcodes: "SL4" },
    { name: "Maidenhead", postcodes: "SL6" },
    { name: "Eton", postcodes: "SL4 6xx" },
    { name: "Beaconsfield", postcodes: "HP9" },
    { name: "Gerrards Cross", postcodes: "SL9" }
  ];

  return (
    <section id="coverage" className="py-20 bg-band border-y border-line">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold">
            <MapPin className="w-4 h-4 text-cyan-400" /> Local Coverage Area
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-ink">We Cover Slough + 5 Surrounding Areas</h3>
          <p className="text-body leading-relaxed">
            Based centrally in Slough, our mobile plumbing unit reaches homes and businesses across Berkshire and South Buckinghamshire within minutes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((a, i) => (
              <div key={i} className="bg-panel border border-line p-3.5 rounded-2xl">
                <div className="font-bold text-ink text-sm">{a.name}</div>
                <div className="text-xs text-accent font-mono mt-0.5">{a.postcodes}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 bg-sunk border border-line rounded-3xl p-4 shadow-2xl">
          <div className="h-80 rounded-2xl bg-panel flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-500 flex items-center justify-center text-accent mb-4 animate-bounce">
              <Truck className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-ink">Mobile Units Active in Slough Sector</h4>
            <p className="text-xs text-muted mt-2">Average response time: 45 minutes across all listed postcodes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
