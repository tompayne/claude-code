# HookHub 🪝

**Discover and explore open source Claude Code hooks to supercharge your development workflow.**

HookHub is a curated directory of Claude Code hooks that enable automation, code quality checks, security enhancements, and monitoring for your Claude Code sessions. Browse, search, and find the perfect hooks to customize your AI-assisted development experience.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- **15 Curated Hooks** - Hand-picked collection of production-ready Claude Code hooks
- **Smart Search** - Find hooks by name, description, or tags
- **Category Filtering** - Browse by Code Quality, Security, Automation, Monitoring, and more
- **Detailed Documentation** - Installation instructions, code examples, and use cases for each hook
- **Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile
- **Dark Mode** - Full dark mode support matching Claude Code's aesthetic
- **Copy to Clipboard** - Quick installation with one-click copy buttons

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/tompayne/claude-code.git
cd claude-code/hookhub

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see HookHub in action.

## 🏗️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)

## 📁 Project Structure

```
hookhub/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── HomeClient.tsx     # Client component with search/filter
│   ├── layout.tsx         # Root layout
│   ├── hooks/[id]/        # Dynamic hook detail pages
│   └── about/             # About page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── HookCard.tsx       # Hook preview card
│   ├── HookGrid.tsx       # Responsive grid
│   ├── CategoryBadge.tsx  # Category pills
│   ├── SearchBar.tsx      # Search input
│   ├── CategoryFilter.tsx # Category filters
│   └── CodeBlock.tsx      # Code display with copy
├── lib/                   # Utilities
│   ├── types.ts           # TypeScript types
│   └── hooks.ts           # Hook data utilities
├── data/                  # Static data
│   └── hooks.json         # Hooks dataset
├── spec/                  # Documentation
│   └── claude.md          # Project specification
└── public/                # Static assets
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Create optimized production build
npm start            # Run production server

# Code Quality
npm run lint         # Run ESLint
```

## 🪝 Hook Categories

HookHub organizes hooks into 7 categories:

- **Code Quality** - Enforce conventions, check complexity, review code
- **Automation** - Run tests, generate docs, create commits
- **Security** - Block dangerous operations, scan vulnerabilities
- **Monitoring** - Log commands, profile performance, track sessions
- **Formatting** - Auto-format code with prettier/eslint
- **Logging** - Audit trails, session summaries
- **Notifications** - Desktop alerts when input needed

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add New Hooks** - Submit curated hooks to `data/hooks.json`
2. **Improve Documentation** - Enhance hook descriptions and examples
3. **Report Issues** - Found a bug? Open an issue
4. **Feature Requests** - Suggest new features or improvements

## 📖 Learn More

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code Hooks Guide](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Next.js Documentation](https://nextjs.org/docs)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with Claude Code - hooks curated from the community including:
- [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)
- [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)
- [johnlindquist/claude-hooks](https://github.com/johnlindquist/claude-hooks)
- And many more amazing contributors!

---

**[Visit HookHub](https://hookhub.dev)** | **[Report Bug](https://github.com/tompayne/claude-code/issues)** | **[Request Feature](https://github.com/tompayne/claude-code/issues)**
