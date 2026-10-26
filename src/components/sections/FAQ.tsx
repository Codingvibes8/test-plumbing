export default function FAQ() {
  const faqs = [
    { q: "Do you charge a call-out fee?", a: "We offer transparent fixed-price quotations upfront. No hidden charges." },
    { q: "Are your engineers Gas Safe registered?", a: "Yes, 100%. Registration #982145." },
    { q: "How quickly can a plumber arrive?", a: "Typically within 30 to 45 minutes for emergencies." },
    { q: "What warranty is provided?", a: "All workmanship is backed by our 12-month guarantee." }
  ];

  return (
    <section id="faq" className="py-24 bg-band">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Got Questions?</h2>
          <h3 className="text-3xl font-black text-ink">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-panel border border-line rounded-2xl p-6 space-y-2">
              <h4 className="font-bold text-ink">{f.q}</h4>
              <p className="text-body text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
