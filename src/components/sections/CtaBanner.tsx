import Image from 'next/image';

export default function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden text-center">
      <Image
        src="/images/shower-fixtures.jpg"
        alt="Copper shower fixtures and pipework on a dark tiled wall"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-cyan-900/90" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
        <h3 className="text-3xl sm:text-4xl font-black text-white">Need a Trusted Plumber Right Now?</h3>
        <p className="text-slate-200">Get in touch for immediate emergency dispatch or request a free quotation today.</p>
        <button className="bg-white text-blue-950 px-8 py-4 rounded-2xl font-extrabold shadow-2xl">
          Request Free Quote Online
        </button>
      </div>
    </section>
  );
}
