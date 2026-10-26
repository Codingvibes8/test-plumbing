export default function Pricing() {
  const plans = [
    { name: "Standard Call-Out", price: "£65", desc: "First hour diagnostics and minor repairs included.", badge: "No Hidden Fees" },
    { name: "Boiler Service", price: "£85", desc: "Comprehensive Gas Safe efficiency check & certificate.", badge: "Most Popular" },
    { name: "Power Flush", price: "£350+", desc: "Full central heating system clean & sludge removal.", badge: "Full Guarantee" }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Transparent Pricing</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-ink">Fixed Rates & Clear Quotations</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="bg-panel border border-line p-8 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold bg-blue-950 text-cyan-400 px-3 py-1 rounded-full border border-blue-800">{p.badge}</span>
                <h4 className="text-xl font-bold text-ink">{p.name}</h4>
                <div className="text-4xl font-black text-ink">{p.price}</div>
                <p className="text-muted text-sm">{p.desc}</p>
              </div>
              <button className="mt-8 w-full bg-btn hover:bg-btn-hover text-white py-3 rounded-xl font-bold text-sm transition-colors">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
