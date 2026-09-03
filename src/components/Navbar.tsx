import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / name mark */}
        <a href="#top" className="group flex items-center">
          <span className="text-base font-semibold tracking-tight text-content-primary transition-colors duration-200 group-hover:text-accent">
            Saad.
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 rounded-md transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-content-muted hover:text-content-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-bg-surface transition-colors"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-px bg-content-muted transition-transform duration-200 ${
              mobileOpen ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-content-muted transition-transform duration-200 ${
              mobileOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base px-3 py-2.5 rounded-md text-content-muted hover:text-content-primary hover:bg-bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
