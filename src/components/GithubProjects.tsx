import { useEffect, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

type Status = 'loading' | 'success' | 'error';

export default function GithubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('https://api.github.com/users/noirdotdeb/repos');
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data: GitHubRepo[] = await res.json();
        if (cancelled) return;
        const filtered = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 6);
        setRepos(filtered);
        setStatus('success');
      } catch {
        if (cancelled) return;
        setStatus('error');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
        <p className="text-content-muted mb-10">
          Live from GitHub — original repositories, sorted by recent activity.
        </p>

        {status === 'loading' && (
          <div className="flex items-center gap-3 text-sm text-content-muted">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent/40 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            Fetching live repositories…
          </div>
        )}

        {status === 'error' && (
          <div className="text-sm text-content-muted">
            Couldn’t load repositories right now.{' '}
            <a
              href="https://github.com/noirdotdeb"
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent hover:text-accent-hover transition-colors duration-200"
            >
              View on GitHub instead
            </a>
            .
          </div>
        )}

        {status === 'success' && repos.length === 0 && (
          <p className="text-sm text-content-muted">No public repositories found.</p>
        )}

        {status === 'success' && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="bg-black border border-zinc-800 rounded-lg p-6 transition-colors duration-200 hover:border-zinc-600 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-content-primary break-words mb-2">
                  {repo.name}
                </h3>

                <p className="text-sm text-content-muted leading-relaxed mb-4 flex-1">
                  {repo.description ?? 'No description provided.'}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {repo.language && (
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-content-muted border border-zinc-800">
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-content-muted border border-zinc-800">
                      <Star className="w-3 h-3 text-accent" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>

                {/* Updated Link Section */}
                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
                  >
                    View Code <ArrowUpRight className="w-4 h-4" />
                  </a>
                  
                  {repo.homepage && repo.homepage.trim() !== '' && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
                    >
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}