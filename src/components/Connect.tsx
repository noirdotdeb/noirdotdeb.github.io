import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/noirdotdeb',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-profile',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:ali@example.com',
    Icon: Mail,
  },
] as const;

export default function Connect() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-3 text-content-primary">
          Let&rsquo;s Connect
        </h2>
        <p className="text-content-muted max-w-lg leading-relaxed mb-8">
          I&rsquo;m currently looking for software engineering internships and
          junior developer roles. Always happy to talk about new projects,
          ideas, or opportunities.
        </p>

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
    </section>
  );
}
