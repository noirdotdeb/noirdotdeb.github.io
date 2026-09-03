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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="border border-zinc-800 rounded-xl p-5 bg-black/50"
            >
              <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-zinc-900 border border-zinc-800/50 rounded-md text-sm text-zinc-300 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
