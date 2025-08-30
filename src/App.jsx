import React from 'react';
import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import TopStories from './components/TopStories';
import ArticleGrid from './components/ArticleGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mt-4">
          <BreakingTicker />
        </section>
        <section className="mt-8">
          <TopStories />
        </section>
        <section className="mt-10">
          <ArticleGrid />
        </section>
      </main>
      <footer className="mt-16 border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-500 sm:px-6 lg:px-8">
          <p className="font-medium text-neutral-700">Daily Brief</p>
          <p className="mt-2">Independent journalism for a fast world. © {new Date().getFullYear()} Daily Brief Media.</p>
        </div>
      </footer>
    </div>
  );
}
