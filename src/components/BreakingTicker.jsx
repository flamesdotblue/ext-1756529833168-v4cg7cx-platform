import React from 'react';

const headlines = [
  {
    tag: 'Breaking',
    text: 'Global markets rally as inflation cools for third straight month',
  },
  { tag: 'Live', text: 'Tech conference 2025: Keynote highlights and product reveals' },
  { tag: 'Update', text: 'Wildfire containment reaches 85% amid improved weather' },
  { tag: 'Analysis', text: 'What the new privacy rules mean for advertisers' },
];

export default function BreakingTicker() {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white">
      <div className="absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-white to-transparent px-3 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 flex items-center bg-gradient-to-l from-white to-transparent px-3 pointer-events-none" />
      <div className="flex gap-8 whitespace-nowrap py-3 [animation:scroll_30s_linear_infinite]">
        {[...headlines, ...headlines].map((h, i) => (
          <div key={i} className="inline-flex items-center gap-2">
            <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
              {h.tag}
            </span>
            <span className="text-sm text-neutral-800">{h.text}</span>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}
      </style>
    </div>
  );
}
