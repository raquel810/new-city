import { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Door Styles', to: '/door-styles' },
  { label: 'Finishes', to: '/finishes' },
  { label: 'Wood Species', to: '/wood-species' },
  { label: 'Specialty Glass', to: '/specialty-glass' },
  { label: 'OptiFit', to: '/optifit' },
  { label: 'The Studio', to: '/studio' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [row2Hidden, setRow2Hidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const md = window.matchMedia('(min-width: 768px)').matches;
      if (md) {
        if (y > 100 && y > lastScrollY.current) {
          setRow2Hidden(true);
        } else if (y < lastScrollY.current) {
          setRow2Hidden(false);
        }
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      {/* Row 1 — Logo, hamburger (mobile), Frameless Line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/HC-Logo_2025-greybrown-0.png"
            alt="Harris Cabinetry"
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-brand-black hover:text-brand-taupe transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <a
            href="https://hingecabinets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#1B2B3A] border border-[#1B2B3A]/30 rounded-full px-4 py-1.5 inline-flex items-center gap-1.5 hover:bg-[#1B2B3A] hover:text-white transition-all duration-200"
          >
            Frameless Line
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Row 2 — Nav links (md+ only), slides away on scroll-down */}
      <nav
        className={`hidden md:block border-t border-brand-grey/30 overflow-hidden transition-all duration-300 ease-in-out ${
          row2Hidden ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
      >
        <ul className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-8 py-2.5">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="whitespace-nowrap font-sans text-sm text-brand-black hover:text-brand-taupe transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-grey">
          <img src="/HC-icon-greybrown-0.png" alt="Harris Cabinetry" className="h-8 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-brand-black hover:text-brand-taupe transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base text-brand-black hover:text-brand-taupe transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-brand-grey">
            <a
              href="https://hingecabinets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-base text-[#1B2B3A] inline-flex items-center gap-2 hover:text-[#1B2B3A]/70 transition-colors duration-200"
            >
              Frameless Line
              <ExternalLink className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-taupe text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/HC-white.png" alt="Harris Cabinetry" className="h-10 w-auto" loading="lazy" />
            <p className="font-sans text-sm text-brand-taupe leading-relaxed mt-4">
              1/16" tolerances. Permanent construction. Plainfield, IL.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-taupe mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-taupe mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-taupe mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-white/80">
                  12515 Rhea Dr.<br />
                  Plainfield, IL 60585
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-taupe shrink-0" />
                <a
                  href="tel:8152341000"
                  className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                >
                  815.234.1000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-taupe shrink-0" />
                <a
                  href="mailto:info@harriscrafted.com"
                  className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                >
                  info@harriscrafted.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Frameless Line */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-sans text-xs tracking-widest uppercase text-brand-taupe">Our Frameless Line</span>
          </div>
          <a
            href="https://hingecabinets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-white/80 hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
          >
            Explore frameless cabinetry at Hinge Cabinets
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dealers & Trade */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-sans text-xs tracking-widest uppercase text-brand-taupe">Dealers & Trade</span>
          </div>
          <a
            href="https://www.hcdealers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-white/80 hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
          >
            Dealer & trade program
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-taupe">
            &copy; {new Date().getFullYear()} Harris Cabinetry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
