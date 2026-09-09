"use client";

import * as React from "react";
import {
  Piano,
  Music2,
  Crosshair,
  Pickaxe,
  Sparkles,
  Tv,
  Compass,
  Users,
  Mic2,
  Car,
  Coffee,
  ChefHat,
  type LucideIcon,
} from "lucide-react";

import KineticGrid from "@/components/ui/kinetic-grid";
import { hobbies, type Hobby } from "@/lib/content";

const hobbyIcons: Record<Hobby["icon"], LucideIcon> = {
  piano: Piano,
  dance: Music2,
  valorant: Crosshair,
  fortnite: Pickaxe,
  naruto: Sparkles,
  himym: Tv,
  scouts: Compass,
  friends: Users,
  concerts: Mic2,
  car: Car,
  starbucks: Coffee,
  food: ChefHat,
};

type FlatPhoto = { key: string; hobby: Hobby; src: string; aspect: number };
type LaidOutPhoto = FlatPhoto & { width: number; height: number; top: number; left: number };

const GAP = 4;

/**
 * Classic "justified gallery" layout (the row style Flickr/Google Photos
 * use): walk the photos in order, filling a row until its natural width at
 * a target height reaches the container width, then scale that whole row
 * so it lands exactly at the container's edges. Every photo keeps its own
 * aspect ratio - nothing gets cropped - and because photos already arrive
 * grouped by hobby, each hobby's photos land in the same or neighboring
 * rows without needing to force hard breaks between hobbies.
 */
const MAX_ROW_SCALE = 1.35;

function justify(photos: FlatPhoto[], containerWidth: number, targetHeight: number): LaidOutPhoto[] {
  if (containerWidth <= 0 || photos.length === 0) return [];

  // Pass 1: greedy row grouping - fill a row until its natural width at the
  // target height would reach the container width.
  const rows: FlatPhoto[][] = [];
  let row: FlatPhoto[] = [];
  let aspectSum = 0;
  for (const photo of photos) {
    row.push(photo);
    aspectSum += photo.aspect;
    const widthAtTarget = aspectSum * targetHeight + GAP * (row.length - 1);
    if (widthAtTarget >= containerWidth) {
      rows.push(row);
      row = [];
      aspectSum = 0;
    }
  }
  if (row.length > 0) rows.push(row);

  const scaleOf = (items: FlatPhoto[]) => {
    const sum = items.reduce((s, p) => s + p.aspect, 0);
    const gapsWidth = GAP * (items.length - 1);
    return (containerWidth - gapsWidth) / (sum * targetHeight);
  };

  // Pass 2: a trailing row with too few photos would otherwise need a huge
  // stretch to reach the container's edges, leaving empty space if capped
  // or blowing photos up if not. Borrow photos from the row before it until
  // it's reasonably full - and since that can leave the row it borrowed
  // from too sparse in turn, walk backward through every row so the fix
  // cascades instead of just relocating the gap by one row.
  for (let i = rows.length - 1; i >= 1; i--) {
    let guard = 0;
    while (scaleOf(rows[i]) > MAX_ROW_SCALE && rows[i - 1].length > 1 && guard < 50) {
      const moved = rows[i - 1].pop();
      if (!moved) break;
      rows[i].unshift(moved);
      guard++;
    }
  }

  // Pass 3: compute final pixel geometry now that row membership is set.
  const out: LaidOutPhoto[] = [];
  let top = 0;
  for (const items of rows) {
    const rowHeight = targetHeight * scaleOf(items);
    let left = 0;
    for (const p of items) {
      const width = p.aspect * rowHeight;
      out.push({ ...p, width, height: rowHeight, top, left });
      left += width + GAP;
    }
    top += rowHeight + GAP;
  }

  return out;
}

function CollageTile({
  photo,
  active,
  parallax,
  onEnter,
  onLeave,
}: {
  photo: LaidOutPhoto;
  active: boolean;
  parallax: { x: number; y: number };
  onEnter: () => void;
  onLeave: () => void;
}) {
  // Run each tile a bit bigger than its justified slot, pinned to the same
  // center, so neighbors overlap slightly for a real collage feel - the
  // slot already matches the photo's own aspect ratio, so the only crop
  // is this small overlap margin, never the sliver-cropping arbitrary
  // grid cells caused before.
  const overlap = 1.1;
  const w = photo.width * overlap;
  const h = photo.height * overlap;
  const left = photo.left + photo.width / 2 - w / 2;
  const top = photo.top + photo.height / 2 - h / 2;

  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group absolute overflow-hidden text-left shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-[filter,z-index] duration-200 ${
        active ? "z-10 brightness-110" : "brightness-90 hover:brightness-100"
      }`}
      style={{ left, top, width: w, height: h }}
    >
      <div
        className="h-full w-full transition-transform duration-150 ease-out"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        className={`pointer-events-none absolute inset-0 ring-1 ring-inset transition-all duration-200 ${
          active ? "bg-black/0 ring-[#4a9eff]/80" : "bg-black/0 ring-black/25"
        }`}
      />
    </button>
  );
}

export function PersonalLifeSection() {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);
  const [hoverBox, setHoverBox] = React.useState<{ left: number; top: number; width: number; height: number } | null>(
    null,
  );
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => setContainerWidth(entries[0].contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const flat = React.useMemo<FlatPhoto[]>(
    () =>
      hobbies.flatMap((h) =>
        h.photos.map((p, i) => ({ key: `${h.slug}-${i}`, hobby: h, src: p.src, aspect: p.aspect })),
      ),
    [],
  );

  const targetHeight = containerWidth < 640 ? 92 : 150;
  const laidOut = React.useMemo(
    () => justify(flat, containerWidth, targetHeight),
    [flat, containerWidth, targetHeight],
  );
  const totalHeight = laidOut.length > 0 ? Math.max(...laidOut.map((p) => p.top + p.height)) : 0;

  const active = hobbies.find((h) => h.slug === activeSlug) ?? null;
  const ActiveIcon = active ? hobbyIcons[active.icon] : null;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 1.4, y: py * 1.4 });
  };

  // Float the detail card right next to whichever tile is hovered - just
  // outside it on whichever side has more room - instead of jumping to a
  // far corner of the whole collage, so it reads as "about this picture"
  // rather than a separate thing happening elsewhere on the page.
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 190;
  const CARD_MARGIN = 14;
  const cardPos = (() => {
    if (!hoverBox || containerWidth <= 0) return { left: 0, top: 0 };
    const putLeft = hoverBox.left + hoverBox.width / 2 > containerWidth / 2;
    let left = putLeft
      ? hoverBox.left - CARD_MARGIN - CARD_WIDTH
      : hoverBox.left + hoverBox.width + CARD_MARGIN;
    left = Math.max(8, Math.min(left, containerWidth - CARD_WIDTH - 8));
    let top = hoverBox.top + hoverBox.height / 2 - CARD_HEIGHT / 2;
    top = Math.max(8, Math.min(top, totalHeight - CARD_HEIGHT - 8));
    return { left, top };
  })();

  return (
    <section
      id="personal"
      className="relative left-1/2 w-screen -translate-x-1/2 border-b border-border"
    >
      <KineticGrid>
        <div className="mx-auto max-w-5xl px-6 pt-10 sm:pt-14">
          <div className="mb-4 flex items-baseline justify-between gap-4 font-body-alt text-white">
            <p className="font-display-alt text-[12px] font-bold uppercase tracking-[0.2em] text-[#4a9eff]">
              Off the clock
            </p>
            <span className="font-mono text-[12px] text-white/40">{flat.length}</span>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative w-full overflow-hidden"
          style={{ height: totalHeight || undefined }}
        >
          {laidOut.map((photo, i) => {
            const depth = ((i % 5) + 1) * 1.5;
            return (
              <CollageTile
                key={photo.key}
                photo={photo}
                active={photo.hobby.slug === activeSlug}
                parallax={{ x: tilt.x * depth, y: tilt.y * depth }}
                onEnter={() => {
                  setActiveSlug(photo.hobby.slug);
                  setHoverBox(photo);
                }}
                onLeave={() => setActiveSlug(null)}
              />
            );
          })}

          <div
            className={`pointer-events-none absolute z-20 rounded-xl border border-white/15 bg-black/70 p-5 font-body-alt text-white shadow-2xl backdrop-blur-md transition-all duration-300 ${
              active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ left: cardPos.left, top: cardPos.top, width: CARD_WIDTH }}
          >
            {active && ActiveIcon && (
              <>
                <span className="mb-3 flex size-9 items-center justify-center rounded-full bg-[#4a9eff]/20 text-[#4a9eff]">
                  <ActiveIcon className="size-4" />
                </span>
                <h3 className="font-display-alt text-lg font-bold text-white">{active.title}</h3>
                <p className="mt-0.5 text-[12px] text-white/50">{active.tagline}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/80">{active.description}</p>
              </>
            )}
          </div>
        </div>
        <div className="pt-8 sm:pt-10" />

        {/* Mobile: hover doesn't apply on touch, so list everything inline below */}
        <div className="mx-auto max-w-5xl px-6 pb-8 sm:hidden">
          <div className="grid gap-3">
            {hobbies.filter((h) => h.photos.length > 0).map((h) => {
              const Icon = hobbyIcons[h.icon];
              return (
                <div key={h.slug} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="size-4 text-[#4a9eff]" />
                    <span className="font-display-alt text-sm font-bold text-white">{h.title}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-white/70">{h.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </KineticGrid>
    </section>
  );
}
