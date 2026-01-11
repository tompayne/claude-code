import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - HookHub',
  description: 'Learn about Claude Code hooks and how to use HookHub to enhance your development workflow.',
};

export default function AboutPage() {
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
          Back to home
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-foreground">About HookHub</h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">What are Claude Code Hooks?</h2>
            <p className="mt-4 text-foreground/70">
              Claude Code hooks are user-defined shell commands that execute at specific lifecycle events
              in Claude Code. They provide <strong>deterministic control</strong> over Claude's behavior,
              ensuring certain actions always happen rather than relying on the LLM to choose to perform them.
            </p>
            <p className="mt-4 text-foreground/70">
              Hooks act as triggers that inject custom logic, scripts, and commands into Claude's operations,
              enabling automation, code quality checks, notifications, logging, and custom workflows.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">Why Use Hooks?</h2>
            <ul className="mt-4 space-y-3 text-foreground/70">
              <li className="flex items-start">
                <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Automate repetitive tasks</strong> - Run formatters, linters, or tests automatically after code changes</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Enforce code quality</strong> - Validate naming conventions, check complexity, and ensure best practices</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Enhance security</strong> - Block modifications to sensitive files and scan for vulnerabilities</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Monitor and log</strong> - Track tool executions and create audit trails for compliance</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Stay notified</strong> - Get alerts when Claude needs input or completes tasks</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">Hook Lifecycle Events</h2>
            <p className="mt-4 text-foreground/70">
              Hooks can be triggered at various points in Claude Code's execution:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">PreToolUse</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs before tool calls and can block them</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">PostToolUse</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs immediately after a tool completes successfully</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">UserPromptSubmit</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs when the user submits a prompt</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">PermissionRequest</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs when a permission dialog is shown</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">SessionEnd</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs when Claude Code session ends</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="font-semibold text-foreground">OnClaudeResponse</h3>
                <p className="mt-1 text-sm text-foreground/60">Runs when Claude provides a response</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">How to Install Hooks</h2>
            <p className="mt-4 text-foreground/70">
              To install a hook from HookHub:
            </p>
            <ol className="mt-4 space-y-3 text-foreground/70">
              <li>1. Browse the hook catalog and find a hook that suits your needs</li>
              <li>2. Click on the hook to view its detail page</li>
              <li>3. Copy the installation configuration from the Installation section</li>
              <li>4. Add the configuration to your Claude Code hooks settings file</li>
              <li>5. If the hook requires a script file, visit the GitHub repository to download it</li>
              <li>6. Restart Claude Code to activate the hook</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">Learn More</h2>
            <p className="mt-4 text-foreground/70">
              For detailed documentation on Claude Code hooks, visit the official documentation:
            </p>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-purple-500 hover:text-purple-600"
            >
              Claude Code Hooks Documentation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </section>

          <section className="rounded-lg bg-purple-50 p-6 dark:bg-purple-950/20">
            <h2 className="text-2xl font-semibold text-foreground">About This Project</h2>
            <p className="mt-4 text-foreground/70">
              HookHub is a community-driven catalog of Claude Code hooks. Our mission is to make it easy
              for developers to discover, share, and implement hooks that enhance their Claude Code workflow.
            </p>
            <p className="mt-4 text-foreground/70">
              This is an MVP focused on displaying and browsing hooks. Future enhancements may include
              user submissions, ratings, and more advanced search capabilities.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
