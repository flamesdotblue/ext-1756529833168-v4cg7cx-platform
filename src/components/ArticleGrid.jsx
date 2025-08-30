import React from 'react';

const articles = [
  {
    title: 'How floods are redrawing coastal maps',
    category: 'Climate',
    time: '2h ago',
    image:
      'https://images.unsplash.com/photo-1502302414603-50e9c5a9b62e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Startups are reinventing payments again',
    category: 'Finance',
    time: '3h ago',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Euro 2025: Young stars to watch',
    category: 'Sports',
    time: '4h ago',
    image:
      'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'From page to screen: Summer adaptations',
    category: 'Culture',
    time: '5h ago',
    image:
      'https://images.unsplash.com/photo-1514890547357-a9ee1c5f2c2f?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Cities try night mayors to boost downtowns',
    category: 'Urbanism',
    time: '6h ago',
    image:
      'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Why batteries are getting cheaper—again',
    category: 'Energy',
    time: '7h ago',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2069&auto=format&fit=crop',
  },
];

export default function ArticleGrid() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-extrabold tracking-tight">Latest</h2>
        <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <article key={i} className="group overflow-hidden rounded-xl border bg-white">
            <div className="relative">
              <img
                src={a.image}
                alt={a.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded bg-neutral-900/90 px-2 py-0.5 text-xs font-semibold text-white">
                {a.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold leading-snug">
                <a href="#" className="hover:underline">
                  {a.title}
                </a>
              </h3>
              <div className="mt-2 text-xs text-neutral-500">{a.time}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
