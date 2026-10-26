import Image from 'next/image';
import { ShieldCheck, ArrowRight, Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold shadow-inner">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> Slough&apos;s Rated #1 Trusted Plumbing & Heating Experts
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-ink tracking-tight leading-[1.1]">
            Reliable Plumbers. <br />
            <span className="text-gradient">No Call-Out Fee.</span> Fast Response.
          </h1>
          <p className="text-body text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            From emergency leak repairs and boiler breakdowns to luxury bathroom installations. Gas Safe registered engineers serving Slough and surrounding counties with 15+ years of excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 group">
              <span>Get Your Free Fast Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:08001234567" className="w-full sm:w-auto bg-panel border border-line px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-accent/40 transition-colors">
              <Phone className="w-5 h-5 text-success" />
              <span>Call 0800 123 4567</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 bg-panel border border-line rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-line">
            <Image
              src="/images/van.jpg"
              alt="ApexFlow Plumbing branded service van parked outside a Slough home at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Mobile units on the road across Berkshire
            </div>
          </div>
          <div className="bg-sunk p-4 rounded-2xl border border-line flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-rating">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-rating text-sm font-bold">
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-xs text-muted">Based on 340+ verified local reviews</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-cyan-400 bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-800">Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
