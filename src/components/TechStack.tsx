const CATEGORIES = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Database',
    items: ['MongoDB', 'MariaDB', 'SQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'VS Code'],
  },
  {
    label: 'Additional',
    items: ['C#', '.NET', 'Avalonia UI'],
  },
] as const;

export default function TechStack() {
  return (
    <section id="stack" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-content-primary">
          Tech Stack
        </h2>
        <p className="text-content-muted mb-10">
          The tools and technologies I work with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-content-faint mb-3">
                {cat.label}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-content-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
