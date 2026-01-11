export type HookCategory =
  | 'Code Quality'
  | 'Automation'
  | 'Security'
  | 'Monitoring'
  | 'Formatting'
  | 'Logging'
  | 'Notifications';

export type HookEventType =
  | 'PreToolUse'
  | 'PostToolUse'
  | 'UserPromptSubmit'
  | 'PermissionRequest'
  | 'SessionEnd'
  | 'OnClaudeResponse'
  | 'OnSubagentCompletion'
  | 'OnCompaction';

export type HookType = 'command' | 'prompt';

export interface Hook {
  id: string;                    // Unique identifier (slug format)
  name: string;                  // Display name
  description: string;           // Brief description (1-2 sentences)
  longDescription: string;       // Detailed explanation
  category: HookCategory;        // Primary category
  eventType: HookEventType;      // Lifecycle event
  hookType: HookType;            // Hook type
  author: string;                // Creator/maintainer
  githubUrl: string;             // Repository link
  installCommand?: string;       // Optional installation snippet
  example?: string;              // Code example/snippet
  tags: string[];                // Additional tags for search
  createdAt: string;             // ISO date string
}

export interface HooksData {
  hooks: Hook[];
}
