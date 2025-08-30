import React from 'react';
import { Menu, Search, Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-neutral-700 hover:bg-neutral-50 sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">Daily Brief</span>
            <span className="hidden rounded bg-neutral-900 px-1.5 py-0.5 text-xs font-semibold text-white sm:inline">LIVE</span>
          </a>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          <a href="#" className="hover:text-neutral-900">Top</a>
          <a href="#" className="hover:text-neutral-900">World</a>
          <a href="#" className="hover:text-neutral-900">Business</a>
          <a href="#" className="hover:text-neutral-900">Tech</a>
          <a href="#" className="hover:text-neutral-900">Culture</a>
          <a href="#" className="hover:text-neutral-900">Sports</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search articles"
              className="h-10 w-56 rounded-md border border-neutral-200 bg-white pl-10 pr-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-0"
            />
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          </div>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-neutral-700 hover:bg-neutral-50">
            <Sun className="h-5 w-5" />
          </button>
          <button className="ml-1 rounded-md bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}
