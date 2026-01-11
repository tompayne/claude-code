import { HookCategory } from '@/lib/types';

interface CategoryBadgeProps {
  category: HookCategory;
}

const categoryColors: Record<HookCategory, string> = {
  'Code Quality': 'bg-blue-500',
  'Automation': 'bg-green-500',
  'Security': 'bg-red-500',
  'Monitoring': 'bg-yellow-500',
  'Formatting': 'bg-purple-500',
  'Logging': 'bg-gray-500',
  'Notifications': 'bg-pink-500',
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const colorClass = categoryColors[category];

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-white ${colorClass}`}>
      {category}
    </span>
  );
}
