export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <span className="font-serif text-2xl font-bold">Lake Roots</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-4 max-w-md">
              Café by day, full-service dinner & cocktails by night, curated market — all under one roof in Crystal Lake, IL.
            </p>
            <div className="flex gap-4">
              <a href="http://instagram.com/lakerootsco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage-400 transition-colors" aria-label="Instagram">
                📸
              </a>
              <a href="http://facebook.com/lakerootsco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage-400 transition-colors" aria-label="Facebook">
                👍
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#menu" className="hover:text-sage-300 transition-colors">Menu</a></li>
              <li><a href="#reviews" className="hover:text-sage-300 transition-colors">Reviews</a></li>
              <li><a href="#market" className="hover:text-sage-300 transition-colors">Market</a></li>
              <li><a href="#events" className="hover:text-sage-300 transition-colors">Events</a></li>
              <li><a href="#visit" className="hover:text-sage-300 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="tel:8158936240" className="hover:text-sage-300 transition-colors">(815) 893-6240</a>
              </li>
              <li>
                <a href="mailto:events@lakerootscl.com" className="hover:text-sage-300 transition-colors">events@lakerootscl.com</a>
              </li>
              <li>475 W Virginia Street</li>
              <li>Crystal Lake, IL 60014</li>
            </ul>

            <div className="mt-6">
              <a
                href="https://order.toasttab.com/egiftcards/lake-roots-475-west-virginia-street"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-wood-500 hover:bg-wood-400 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              >
                🎁 Buy E-Gift Cards
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Lake Roots Café Market & Bar. All rights reserved.</p>
          <p>475 W Virginia Street, Crystal Lake, IL 60014</p>
        </div>
      </div>
    </footer>
  );
}
