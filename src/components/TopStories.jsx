import React from 'react';

const features = [
  {
    title: 'Inside the race to build the clean energy grid',
    category: 'Energy',
    author: 'Mina Clarke',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1974&auto=format&fit=crop',
    blurb:
      'Massive investments and new storage breakthroughs are reshaping how power moves from wind and solar to your home.',
  },
  {
    title: 'AI chips: Why the next wave will look nothing like GPUs',
    category: 'Technology',
    author: 'Jules Park',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2069&auto=format&fit=crop',
    blurb:
      'Startups bet on specialized silicon to cut costs and power consumption in data centers worldwide.',
  },
  {
    title: 'The new geography of remote work is finally here',
    category: 'Business',
    author: 'Ravi Patel',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2070&auto=format&fit=crop',
    blurb:
      'Second-tier cities are booming as companies formalize hybrid policies and talent moves closer to lifestyle.',
  },
];

export default function TopStories() {
  const lead = features[0];
  const side = features.slice(1);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <article className="relative overflow-hidden rounded-xl border bg-white lg:col-span-2">
        <img
          src={lead.image}
          alt={lead.title}
          className="h-72 w-full object-cover sm:h-96"
          loading="lazy"
        />
        <div className="p-5 sm:p-6">
          <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
            {lead.category}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
            <a href="#" className="hover:underline">
              {lead.title}
            </a>
          </h2>
          <p className="mt-2 line-clamp-3 text-neutral-700">{lead.blurb}</p>
          <div className="mt-4 text-sm text-neutral-500">By {lead.author}</div>
        </div>
      </article>

      <div className="grid grid-cols-1 gap-6">
        {side.map((s, i) => (
          <article key={i} className="overflow-hidden rounded-xl border bg-white">
            <div className="flex">
              <img
                src={s.image}
                alt={s.title}
                className="h-40 w-40 flex-none object-cover sm:h-44 sm:w-44"
                loading="lazy"
              />
              <div className="p-4 sm:p-5">
                <span className="rounded bg-emerald-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                  {s.category}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug">
                  <a href="#" className="hover:underline">
                    {s.title}
                  </a>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-700">{s.blurb}</p>
                <div className="mt-2 text-xs text-neutral-500">By {s.author}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
