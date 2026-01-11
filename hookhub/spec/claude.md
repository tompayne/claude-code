# HookHub MVP Specification

## Project Overview

**HookHub** is a platform for discovering and browsing open source Claude Code hooks. It serves as a curated directory where developers can find, explore, and learn about community-created hooks to enhance their Claude Code workflows.

### What Are Claude Hooks?

Claude hooks are user-defined shell commands that execute at specific lifecycle events in Claude Code. They provide deterministic control over Claude's behavior, enabling automation, code quality checks, notifications, logging, and custom workflows.

## MVP Scope

This MVP focuses on **displaying and browsing hooks only**. Core functionality includes:
- Browse curated collection of hooks
- Search and filter by category
- View detailed hook information
- Link to GitHub repositories for installation

**Out of Scope for MVP:**
- User authentication
- Hook submissions/contributions
- Hook ratings/reviews
- Installation automation
- Hook analytics

## Technical Architecture

### Framework & Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Static JSON** data source
- **Server Components** for performance

### Data Model

```typescript
interface Hook {
  id: string;                    // Unique identifier (slug format)
  name: string;                  // Display name
  description: string;           // Brief description (1-2 sentences)
  longDescription: string;       // Detailed explanation
  category: HookCategory;        // Primary category
  eventType: HookEventType;      // Lifecycle event
  hookType: 'command' | 'prompt'; // Hook type
  author: string;                // Creator/maintainer
  githubUrl: string;             // Repository link
  installCommand?: string;       // Optional installation snippet
  example?: string;              // Code example/snippet
  tags: string[];               // Additional tags for search
  createdAt: string;            // ISO date string
}

type HookCategory =
  | 'Code Quality'
  | 'Automation'
  | 'Security'
  | 'Monitoring'
  | 'Formatting'
  | 'Logging'
  | 'Notifications';

type HookEventType =
  | 'PreToolUse'
  | 'PostToolUse'
  | 'UserPromptSubmit'
  | 'PermissionRequest'
  | 'SessionEnd'
  | 'OnClaudeResponse'
  | 'OnSubagentCompletion'
  | 'OnCompaction';
```

## Page Structure

### 1. Home Page (`/`)

**Purpose**: Landing page with hook discovery

**Layout**:
```
┌─────────────────────────────────────┐
│         Header / Navigation         │
├─────────────────────────────────────┤
│         Hero Section                │
│  "Discover Claude Code Hooks"       │
│   Search bar + Category filters     │
├─────────────────────────────────────┤
│         Hook Grid                   │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Hook │ │Hook │ │Hook │           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Hook │ │Hook │ │Hook │           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
└─────────────────────────────────────┘
```

**Components**:
- **Header**: Logo, navigation links (Home, About), GitHub link
- **Hero**: Title, tagline, search input
- **CategoryFilter**: Horizontal list of category badges
- **HookGrid**: Responsive grid of hook cards
- **HookCard**: Name, category badge, description, GitHub icon

**Functionality**:
- Display all hooks by default
- Real-time search filtering (name, description, tags)
- Category filter (show all or filter by single category)
- Click card to navigate to detail page

### 2. Hook Detail Page (`/hooks/[id]`)

**Purpose**: Full details about a specific hook

**Layout**:
```
┌─────────────────────────────────────┐
│         Header / Navigation         │
├─────────────────────────────────────┤
│  Hook Name              [GitHub →]  │
│  Category Badge | Event Type        │
├─────────────────────────────────────┤
│  Description                        │
│  (Long description with details)    │
├─────────────────────────────────────┤
│  Installation                       │
│  ┌─────────────────────────────┐   │
│  │ $ command to install        │   │
│  │ [Copy]                      │   │
│  └─────────────────────────────┘   │
├─────────────────────────────────────┤
│  Example Code                       │
│  ┌─────────────────────────────┐   │
│  │ code snippet                │   │
│  └─────────────────────────────┘   │
├─────────────────────────────────────┤
│  Metadata                           │
│  Hook Type: command                 │
│  Event: PostToolUse                 │
│  Author: username                   │
│  Tags: tag1, tag2, tag3            │
└─────────────────────────────────────┘
```

**Components**:
- **HookHeader**: Name, GitHub link button, category/event badges
- **Description**: Formatted long description
- **InstallationSection**: Code block with copy button
- **CodeExample**: Syntax-highlighted code snippet
- **MetadataGrid**: Hook details in a structured layout

**Functionality**:
- Dynamic route using hook ID
- Copy installation command to clipboard
- Link to GitHub repository
- Back to home navigation

### 3. About Page (`/about`)

**Purpose**: Explain Claude Code hooks and how to use HookHub

**Content**:
- What are Claude Code hooks?
- Why use hooks?
- How to install and use hooks
- Hook lifecycle events explained
- Link to official Claude Code documentation
- Contributing to HookHub (future)

## File Structure

```
/hookhub
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── hooks/
│   │   └── [id]/
│   │       └── page.tsx           # Hook detail page
│   └── about/
│       └── page.tsx               # About page
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── HookCard.tsx              # Hook preview card
│   ├── HookGrid.tsx              # Grid container
│   ├── CategoryFilter.tsx        # Category filter bar
│   ├── SearchBar.tsx             # Search input
│   ├── CodeBlock.tsx             # Syntax highlighted code
│   └── CategoryBadge.tsx         # Category pill
├── data/
│   └── hooks.json                # Static hook data
├── lib/
│   ├── hooks.ts                  # Hook data utilities
│   └── types.ts                  # TypeScript types
├── public/
│   └── (assets)
└── (config files)
```

## Data Source

### Initial Hook Collection

Start with **10-15 curated hooks** from existing repositories:

1. **Auto-formatter Hook** (Code Quality)
   - PostToolUse event
   - Runs prettier/eslint after file edits
   - Source: claude-code-showcase

2. **Permission Blocker** (Security)
   - PermissionRequest event
   - Blocks modifications to production files
   - Source: custom implementation

3. **Command Logger** (Monitoring)
   - PreToolUse event
   - Logs all tool executions
   - Source: claude-code-hooks-mastery

4. **Notification Hook** (Notifications)
   - UserPromptSubmit event
   - Desktop notifications when input needed
   - Source: community examples

5. **Code Convention Checker** (Code Quality)
   - PostToolUse event
   - Validates naming conventions
   - Source: custom implementation

(Continue with 5-10 more real examples from GitHub repositories)

### hooks.json Structure

```json
{
  "hooks": [
    {
      "id": "auto-formatter",
      "name": "Auto Formatter",
      "description": "Automatically formats code files after edits using prettier or language-specific formatters",
      "longDescription": "This hook runs automatically after Claude edits any code file. It detects the file type and applies the appropriate formatter (prettier for .ts/.js/.tsx, gofmt for .go, etc.). This ensures consistent code style across your project without manual intervention.",
      "category": "Code Quality",
      "eventType": "PostToolUse",
      "hookType": "command",
      "author": "ChrisWiles",
      "githubUrl": "https://github.com/ChrisWiles/claude-code-showcase",
      "installCommand": "# Add to your Claude Code hooks config\n{\n  \"event\": \"PostToolUse\",\n  \"matcher\": \"Edit\",\n  \"command\": \"./scripts/format.sh\"\n}",
      "example": "#!/bin/bash\n# format.sh\nif [[ $TOOL_INPUT =~ \\.ts$ ]]; then\n  npx prettier --write \"$TOOL_INPUT\"\nfi",
      "tags": ["formatting", "prettier", "eslint", "code-quality"],
      "createdAt": "2024-01-15T00:00:00Z"
    }
  ]
}
```

## UI/UX Design

### Visual Design
- **Color Scheme**: Dark mode by default (matches Claude Code aesthetic)
  - Background: `#0a0a0a` (dark) / `#ffffff` (light)
  - Foreground: `#ededed` (dark) / `#171717` (light)
  - Accent: `#8b5cf6` (purple for links/CTAs)
  - Category badges: Distinct colors per category

- **Typography**:
  - Headings: Geist Sans (already configured)
  - Code: Geist Mono (already configured)
  - Body: Geist Sans

- **Spacing**: Tailwind defaults (4px grid system)

### Component Styling

**HookCard**:
- Border: subtle border with hover effect
- Padding: `p-6`
- Rounded corners: `rounded-lg`
- Shadow on hover: `hover:shadow-lg`
- Category badge in top-right corner
- GitHub icon in bottom-right

**CategoryBadge**:
- Pill shape: `rounded-full px-3 py-1`
- Small text: `text-xs font-medium`
- Color-coded by category:
  - Code Quality: Blue (`bg-blue-500`)
  - Automation: Green (`bg-green-500`)
  - Security: Red (`bg-red-500`)
  - Monitoring: Yellow (`bg-yellow-500`)
  - Formatting: Purple (`bg-purple-500`)
  - Logging: Gray (`bg-gray-500`)
  - Notifications: Pink (`bg-pink-500`)

### Responsive Design
- Mobile: Single column grid
- Tablet: 2 column grid
- Desktop: 3 column grid
- Large desktop: 4 column grid

## Search & Filter Implementation

### Search Logic
```typescript
function filterHooks(hooks: Hook[], searchTerm: string, category: string | null) {
  return hooks.filter(hook => {
    const matchesSearch = searchTerm === '' ||
      hook.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hook.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = !category || hook.category === category;

    return matchesSearch && matchesCategory;
  });
}
```

### Client-Side State
- Use React `useState` for search term and selected category
- Filter hooks array on each render
- No debouncing needed for MVP (small dataset)

## SEO & Metadata

### Home Page
```typescript
export const metadata: Metadata = {
  title: 'HookHub - Discover Claude Code Hooks',
  description: 'Browse and discover open source hooks for Claude Code. Enhance your workflow with automation, code quality, security, and monitoring hooks.',
  keywords: ['Claude Code', 'hooks', 'automation', 'AI development'],
};
```

### Hook Detail Pages
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const hook = getHookById(params.id);
  return {
    title: `${hook.name} - HookHub`,
    description: hook.description,
  };
}
```

## Implementation Plan

### Phase 1: Core Structure
**Files to Create:**
- `lib/types.ts` - TypeScript interfaces
- `data/hooks.json` - Initial hook data (10-15 hooks)
- `lib/hooks.ts` - Data fetching utilities

**Files to Modify:**
- `app/page.tsx` - Home page with hook listing

### Phase 2: Components
**Files to Create:**
- `components/Header.tsx`
- `components/HookCard.tsx`
- `components/HookGrid.tsx`
- `components/CategoryBadge.tsx`
- `components/SearchBar.tsx`
- `components/CategoryFilter.tsx`

### Phase 3: Detail Page
**Files to Create:**
- `app/hooks/[id]/page.tsx` - Dynamic route
- `components/CodeBlock.tsx` - Syntax highlighting

### Phase 4: About Page
**Files to Create:**
- `app/about/page.tsx` - Static content

### Phase 5: Polish
**Files to Modify:**
- `app/globals.css` - Custom styles, category colors
- `app/layout.tsx` - Update metadata

## Verification & Testing

### Manual Testing Checklist
1. **Home Page**
   - [ ] All hooks display in grid
   - [ ] Search filters hooks correctly
   - [ ] Category filter works
   - [ ] Cards link to detail pages
   - [ ] Responsive on mobile/tablet/desktop

2. **Detail Page**
   - [ ] Hook details display correctly
   - [ ] GitHub link opens repository
   - [ ] Copy button works for installation command
   - [ ] Code example displays with syntax highlighting
   - [ ] Back navigation works

3. **About Page**
   - [ ] Content displays correctly
   - [ ] Links to documentation work

4. **General**
   - [ ] Dark mode works correctly
   - [ ] Navigation between pages works
   - [ ] No console errors
   - [ ] Fast page loads (Server Components)
   - [ ] SEO metadata appears in page source

### Build & Deploy
```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Verify build succeeds with no errors
# Verify all pages render in production mode
```

## Future Enhancements (Post-MVP)

- GitHub API integration for automatic hook discovery
- User authentication & submissions
- Hook ratings and reviews
- Installation click-to-copy automation
- Filter by event type
- Sort options (newest, popular, alphabetical)
- Hook dependencies and compatibility info
- Code preview with copy functionality
- Related hooks suggestions
- RSS feed for new hooks
- Analytics and popular hooks tracking

---

## Critical Files to Modify

1. `app/page.tsx` - Home page with search and listing
2. `app/layout.tsx` - Update metadata and add Header component
3. `app/globals.css` - Add category colors and custom styles

## Critical Files to Create

1. `spec/claude.md` - This specification file in the spec directory
2. `lib/types.ts` - TypeScript type definitions
3. `lib/hooks.ts` - Hook data utilities (getAllHooks, getHookById, filterHooks)
4. `data/hooks.json` - Initial curated hook collection
5. `components/Header.tsx` - Navigation component
6. `components/HookCard.tsx` - Hook preview card
7. `components/HookGrid.tsx` - Responsive grid container
8. `components/CategoryBadge.tsx` - Category pill component
9. `components/SearchBar.tsx` - Search input component
10. `components/CategoryFilter.tsx` - Category filter buttons
11. `components/CodeBlock.tsx` - Syntax highlighted code display
12. `app/hooks/[id]/page.tsx` - Hook detail page
13. `app/about/page.tsx` - About/documentation page

**Note**: The first step of implementation will be to create the `spec/` directory and copy this specification to `spec/claude.md` within the hookhub project.
