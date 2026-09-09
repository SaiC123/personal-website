"use client";

import * as React from "react";

import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { activities, activityBackdropFor } from "@/lib/content";

const slides: CoverflowSlide[] = activities.map((a) => ({
  src: a.image,
  alt: a.imageAlt,
  title: a.org,
  href: `/activities/${a.slug}`,
  subtitle: a.summary,
  meta: [
    { label: "Role", value: a.role },
    { label: "When", value: a.period },
  ],
}));

/**
 * Picks a column/row count so every photo appears exactly once, sized to
 * fill the backdrop rather than tiling one image over and over. Balances
 * two things: leaving as few empty cells as possible, and landing close to
 * a wide (landscape) shape, since the backdrop itself is short and wide.
 */
function gridDims(count: number, targetAspect = 2.2): { cols: number; rows: number } {
  if (count <= 0) return { cols: 1, rows: 1 };
  const idealCols = Math.max(1, Math.round(Math.sqrt(count * targetAspect)));
  let best = { cols: count, rows: 1, score: Infinity };
  for (let cols = 1; cols <= count; cols++) {
    const rows = Math.ceil(count / cols);
    const waste = cols * rows - count;
    const distFromIdeal = Math.abs(cols - idealCols);
    const score = waste * 2 + distFromIdeal * 1.5;
    if (score < best.score) best = { cols, rows, score };
  }
  return { cols: best.cols, rows: best.rows };
}

export function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeActivity = activities[activeIndex] ?? activities[0];
  const backdrop = activityBackdropFor(activeActivity);
  const { cols, rows } = gridDims(backdrop.length);

  return (
    <section
      id="activities"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-border py-10 sm:py-14"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          key={activeActivity.slug}
          className="grid h-full duration-700 animate-in fade-in"
          style={{
            filter: "blur(5px) saturate(0.95)",
            transform: "scale(1.08)",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {backdrop.map((src) => (
            <div key={src} className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Activities
          </p>
          <span className="font-mono text-[12px] text-muted-foreground">
            {activities.length}
          </span>
        </div>

        <CoverflowCarousel
          slides={slides}
          showCaption
          showNavigation
          showPagination
          label="Activities"
          onSelectedChange={setActiveIndex}
        />
      </div>
    </section>
  );
}
