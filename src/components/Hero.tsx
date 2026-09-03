export default function Hero() {
  return (
    <section
      id="top"
      className="flex items-center justify-center relative px-6 pt-32 pb-24"
    >
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Faint accent glow — single, restrained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-content mx-auto w-full relative">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-accent/40 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
          </span>
          <span className="text-sm text-content-muted">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-content-primary leading-[1.05] mb-5 animate-fade-in-up opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          Ali Saad Attique
        </h1>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl text-content-muted font-medium mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '300ms' }}
        >
          Software Developer.
        </p>

        {/* Bio */}
        <p
          className="text-lg text-content-muted max-w-xl leading-relaxed mb-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: '400ms' }}
        >
          Focused on modern web development, full-stack architecture, and
          practical software engineering.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center gap-3 animate-fade-in-up opacity-0"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href="#projects"
            className="text-sm px-5 py-2.5 rounded-md bg-accent text-bg font-medium transition-colors duration-200 hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-md border border-border text-content-muted transition-colors duration-200 hover:border-border-hover hover:text-content-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
