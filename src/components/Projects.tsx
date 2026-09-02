import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'PlumbConnect',
    description: 'A plumbing management and marketplace application.',
    tags: ['C#', '.NET', 'Avalonia UI', 'MariaDB'],
    href: '#',
  },
  {
    title: 'Number Guessing Game',
    description: 'A browser-based interactive logic project.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: '#',
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
        <p className="text-content-muted mb-10">A selection of things I've built.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="bg-bg-surface border border-border rounded-lg p-6 transition-colors duration-200 hover:border-border-hover"
            >
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-content-muted leading-relaxed mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-elevated text-content-muted border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={p.href}
                className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
              >
                View Code <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
