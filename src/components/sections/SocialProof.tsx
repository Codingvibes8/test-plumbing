import { Star } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    { name: "David Miller", area: "Slough (SL2)", text: "Had a major pipe leak under the kitchen sink on a Sunday evening. ApexFlow arrived in under 40 minutes and fixed it cleanly!" },
    { name: "Sarah Jenkins", area: "Windsor (SL4)", text: "Replaced our outdated boiler with a brand new Worcester Bosch unit. The engineer was extremely knowledgeable and tidy." },
    { name: "Marcus Vance", area: "Maidenhead (SL6)", text: "Fantastic bathroom refit service. They helped design the layout and finished the job right on schedule." }
  ];

  return (
    <section className="py-20 bg-band border-t border-line">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Customer Reviews</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-ink">Trusted by Homeowners Across Slough</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-panel border border-line p-6 rounded-3xl space-y-4">
              <div className="flex text-rating gap-1">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-body text-sm italic leading-relaxed">&quot;{r.text}&quot;</p>
              <div className="pt-4 border-t border-line flex justify-between text-xs">
                <div>
                  <div className="font-bold text-ink">{r.name}</div>
                  <div className="text-muted">{r.area}</div>
                </div>
                <span className="text-success font-medium">Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
