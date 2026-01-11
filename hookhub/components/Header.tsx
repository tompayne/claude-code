import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground">
              HookHub
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <a
              href="https://github.com/tompayne/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
