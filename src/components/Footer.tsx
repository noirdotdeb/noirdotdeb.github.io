export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Name mark */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-accent border border-accent/40 rounded-md px-2 py-0.5">
              asa
            </span>
            <div>
              <p className="font-mono text-xs text-content-muted">
                Ali Saad Attique
              </p>
              <p className="font-mono text-[10px] text-content-faint mt-0.5">
                Software Engineering Student & Web Developer
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-4">
            {[
              { label: 'about', href: '#about' },
              { label: 'projects', href: '#projects' },
              { label: 'stack', href: '#stack' },
              { label: 'contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-content-muted hover:text-accent transition-colors duration-200"
              >
                /{link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-content-faint">
            © {year} Ali Saad Attique. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-content-faint">
            Built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
