import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getHookById, getAllHooks } from '@/lib/hooks';
import { Metadata } from 'next';
import CategoryBadge from '@/components/CategoryBadge';
import CodeBlock from '@/components/CodeBlock';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const hook = getHookById(resolvedParams.id);

  if (!hook) {
    return {
      title: 'Hook Not Found',
    };
  }

  return {
    title: `${hook.name} - HookHub`,
    description: hook.description,
  };
}

export async function generateStaticParams() {
  const hooks = getAllHooks();
  return hooks.map((hook) => ({
    id: hook.id,
  }));
}

export default async function HookDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const hook = getHookById(resolvedParams.id);

  if (!hook) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm text-foreground/60 hover:text-foreground"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all hooks
        </Link>

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="mb-3 text-4xl font-bold text-foreground">{hook.name}</h1>
            <div className="flex items-center gap-3">
              <CategoryBadge category={hook.category} />
              <span className="text-sm text-foreground/60">
                {hook.hookType === 'command' ? 'Command Hook' : 'Prompt Hook'}
              </span>
              <span className="text-sm text-foreground/60">•</span>
              <span className="text-sm text-foreground/60">{hook.eventType}</span>
            </div>
          </div>
          <a
            href={hook.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">Description</h2>
            <p className="text-foreground/70">{hook.longDescription}</p>
          </section>

          {hook.installCommand && (
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">Installation</h2>
              <CodeBlock code={hook.installCommand} language="json" />
            </section>
          )}

          {hook.example && (
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">Example</h2>
              <CodeBlock code={hook.example} language="bash" />
            </section>
          )}

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">Details</h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                <dt className="text-sm font-medium text-foreground/60">Hook Type</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">
                  {hook.hookType === 'command' ? 'Command' : 'Prompt'}
                </dd>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                <dt className="text-sm font-medium text-foreground/60">Event</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{hook.eventType}</dd>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                <dt className="text-sm font-medium text-foreground/60">Author</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{hook.author}</dd>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                <dt className="text-sm font-medium text-foreground/60">Category</dt>
                <dd className="mt-1">
                  <CategoryBadge category={hook.category} />
                </dd>
              </div>
            </dl>
          </section>

          {hook.tags.length > 0 && (
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {hook.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
