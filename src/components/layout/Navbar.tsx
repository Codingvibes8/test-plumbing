import Link from 'next/link';
import { Wrench, Phone } from 'lucide-react';
import ThemeToggle from '@/components/layout/ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-line/80">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-ink block leading-none">ApexFlow</span>
            <span className="text-[10px] font-semibold text-accent tracking-wider uppercase">Plumbing & Heating</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-body">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#coverage" className="hover:text-accent transition-colors">Local Areas</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Project Gallery</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:08001234567" className="hidden sm:flex items-center gap-2 text-ink bg-panel border border-line px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-accent/40 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            <span>0800 123 4567</span>
          </a>
          <ThemeToggle />
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/25">
            Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
