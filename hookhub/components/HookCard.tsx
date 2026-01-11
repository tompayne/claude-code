import Link from 'next/link';
import { Hook } from '@/lib/types';
import CategoryBadge from './CategoryBadge';

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  return (
    <Link href={`/hooks/${hook.id}`}>
      <div className="group relative flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-500">
            {hook.name}
          </h3>
          <CategoryBadge category={hook.category} />
        </div>

        <p className="mb-4 flex-grow text-sm text-foreground/70">
          {hook.description}
        </p>

        <div className="flex items-center justify-between text-xs text-foreground/50">
          <span>{hook.eventType}</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
