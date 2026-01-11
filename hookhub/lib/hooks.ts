import { Hook, HookCategory, HooksData } from './types';
import hooksData from '@/data/hooks.json';

export function getAllHooks(): Hook[] {
  return (hooksData as HooksData).hooks;
}

export function getHookById(id: string): Hook | undefined {
  const hooks = getAllHooks();
  return hooks.find(hook => hook.id === id);
}

export function filterHooks(
  hooks: Hook[],
  searchTerm: string,
  category: HookCategory | null
): Hook[] {
  return hooks.filter(hook => {
    const matchesSearch = searchTerm === '' ||
      hook.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hook.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = !category || hook.category === category;

    return matchesSearch && matchesCategory;
  });
}

export function getHooksByCategory(category: HookCategory): Hook[] {
  const hooks = getAllHooks();
  return hooks.filter(hook => hook.category === category);
}

export const CATEGORIES: HookCategory[] = [
  'Code Quality',
  'Automation',
  'Security',
  'Monitoring',
  'Formatting',
  'Logging',
  'Notifications',
];
