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

export function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeActivity = activities[activeIndex] ?? activities[0];
  const backdrop = activityBackdropFor(activeActivity);

  return (
    <section
      id="activities"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-border py-10 sm:py-14"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          key={activeActivity.slug}
          className="grid h-full grid-cols-4 duration-700 animate-in fade-in sm:grid-cols-6"
          style={{ filter: "blur(5px) saturate(0.95)", transform: "scale(1.08)" }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={backdrop[i % backdrop.length]}
                alt=""
                className="h-full w-full object-cover"
              />
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
