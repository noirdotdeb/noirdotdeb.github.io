import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:shykhalisaadattique@gmail.com',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ali-saad-shykh-3b5880412/',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/noirdotdeb',
    Icon: Github,
  },
] as const;

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-800">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-content-primary mb-1">
              Let&rsquo;s Connect
            </h2>
            <p className="text-sm text-content-muted">
              Open to software engineering internships and junior roles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900">
          <p className="text-xs text-zinc-500">
            Built by Ali Saad Attique. Deployed via GitHub Actions.
          </p>
        </div>
      </div>
    </footer>
  );
}
