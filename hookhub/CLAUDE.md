# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using the App Router architecture, built with TypeScript, React 19, and Tailwind CSS 4.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts the Next.js development server at http://localhost:3000 with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build of the application.

### Production Server
```bash
npm start
```
Runs the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality.

## Architecture

### Framework & Routing
- **Next.js 16** with App Router (not Pages Router)
- File-system based routing located in `/app` directory
- Server Components by default (use `'use client'` directive for client components)

### Styling
- **Tailwind CSS 4** with PostCSS plugin (`@tailwindcss/postcss`)
- Global styles in `app/globals.css`
- Configured for dark mode support via CSS variables

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- JSX runtime: `react-jsx` (no need to import React)
- Module resolution: `bundler`

### Font System
Uses `next/font` for optimized font loading:
- Geist Sans (main text)
- Geist Mono (monospace)
- Fonts are loaded in `app/layout.tsx` and exposed as CSS variables

### ESLint Setup
- Uses Next.js recommended configs: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Configuration file: `eslint.config.mjs` (flat config format)

## File Structure

```
/app              - App Router pages and layouts
  /layout.tsx     - Root layout with font configuration
  /page.tsx       - Home page (route: /)
  /globals.css    - Global styles and Tailwind directives
/public           - Static assets (served from /)
```

## Key Patterns

### Creating New Pages
Create a `page.tsx` file in a directory under `/app`:
```typescript
// app/about/page.tsx
export default function About() {
  return <div>About page</div>;
}
```

### Creating Layouts
Use `layout.tsx` for shared UI around pages:
```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
```

### Client vs Server Components
- Components are Server Components by default
- Use `'use client'` at the top of files that need browser APIs, event handlers, or hooks
- Keep Server Components when possible for better performance

### Metadata
Export metadata from pages/layouts for SEO:
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```
