import { Star } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-band py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="text-3xl font-black text-ink mb-1">15+</div>
          <p className="text-sm text-muted font-medium">Years Local Experience</p>
        </div>
        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="text-3xl font-black text-ink mb-1 flex items-center justify-center gap-1">
            <span>4.9</span><Star className="w-6 h-6 text-rating fill-current" />
          </div>
          <p className="text-sm text-muted font-medium">Google & Checkatrade Rating</p>
        </div>
        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="text-3xl font-black text-ink mb-1">340+</div>
          <p className="text-sm text-muted font-medium">Verified 5-Star Reviews</p>
        </div>
        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="text-3xl font-black text-ink mb-1">24/7</div>
          <p className="text-sm text-muted font-medium">Emergency Callout Available</p>
        </div>
      </div>
    </section>
  );
}
