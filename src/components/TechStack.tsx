const TECHS = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'REST APIs',
  'MongoDB',
  'MariaDB',
  'SQL',
  'Git',
  'GitHub',
  'Linux',
  'VS Code',
  'C#',
  '.NET',
  'Avalonia UI',
] as const;

export default function TechStack() {
  const stream = [...TECHS, ...TECHS];

  return (
    <section id="stack" className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="relative rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />

          <div className="flex w-max animate-marquee py-3">
            {stream.map((tech, i) => (
              <span key={i} className="flex items-center">
                <span className="px-4 text-sm text-zinc-300 font-mono whitespace-nowrap">
                  {tech}
                </span>
                <span className="text-zinc-700 select-none">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
