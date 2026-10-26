export default function Footer() {
  return (
    <footer className="bg-paper border-t border-line py-12 text-muted text-sm">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-ink font-bold mb-2">ApexFlow Plumbing</h4>
          <p className="text-xs">Professional plumbing, heating, and gas engineering across Slough & Berkshire.</p>
        </div>
        <div>
          <h5 className="text-ink font-bold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-xs">
            <li><a href="#services" className="hover:text-accent transition-colors">Emergency Plumbing</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Boiler Installation</a></li>
            <li><a href="#coverage" className="hover:text-accent transition-colors">Coverage Areas</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-ink font-bold mb-2">Contact</h5>
          <p className="text-xs">0800 123 4567<br />High Street, Slough, SL1 1AA</p>
        </div>
        <div>
          <h5 className="text-ink font-bold mb-2">Gas Safe</h5>
          <p className="text-xs text-success">Registered Engineer #982145</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-line text-center text-xs text-faint">
        &copy; 2026 ApexFlow Plumbing & Heating Ltd. All rights reserved.
      </div>
    </footer>
  );
}
