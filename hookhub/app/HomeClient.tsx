'use client';

import { useState, useMemo } from 'react';
import { getAllHooks, filterHooks } from '@/lib/hooks';
import { HookCategory } from '@/lib/types';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import HookGrid from '@/components/HookGrid';

export default function HomeClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HookCategory | null>(null);

  const allHooks = getAllHooks();

  const filteredHooks = useMemo(() => {
    return filterHooks(allHooks, searchTerm, selectedCategory);
  }, [allHooks, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Discover Claude Code Hooks
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Browse and explore open source hooks to enhance your Claude Code workflow with automation,
            code quality checks, security, and more.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mb-4 text-sm text-foreground/50">
          Showing {filteredHooks.length} {filteredHooks.length === 1 ? 'hook' : 'hooks'}
        </div>

        <HookGrid hooks={filteredHooks} />
      </main>
    </div>
  );
}
