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
};

type Rect = { x: number; y: number; w: number; h: number };

/**
 * Slice-and-dice treemap: recursively halves the item list by weight and
 * cuts the current rect along its longer side, so every rect is filled
 * edge-to-edge with no gaps and no empty cells, however the weights split.
 */
function sliceTreemap<T>(items: { weight: number; data: T }[], rect: Rect): { data: T; rect: Rect }[] {
  if (items.length === 0) return [];
  if (items.length === 1) return [{ data: items[0].data, rect }];

  const total = items.reduce((s, i) => s + i.weight, 0);
  let acc = 0;
  let splitIndex = 1;
  for (let i = 0; i < items.length; i++) {
    acc += items[i].weight;
    if (acc >= total / 2) {
      splitIndex = i + 1;
      break;
    }
  }
  splitIndex = Math.max(1, Math.min(items.length - 1, splitIndex));
  const groupA = items.slice(0, splitIndex);
  const groupB = items.slice(splitIndex);
  const weightA = groupA.reduce((s, i) => s + i.weight, 0);
  const weightB = groupB.reduce((s, i) => s + i.weight, 0);
  const fracA = weightA / (weightA + weightB);

  if (rect.w >= rect.h) {
    const wA = rect.w * fracA;
    return [
      ...sliceTreemap(groupA, { ...rect, w: wA }),
      ...sliceTreemap(groupB, { ...rect, x: rect.x + wA, w: rect.w - wA }),
    ];
  }
  const hA = rect.h * fracA;
  return [
    ...sliceTreemap(groupA, { ...rect, h: hA }),
    ...sliceTreemap(groupB, { ...rect, y: rect.y + hA, h: rect.h - hA }),
  ];
}

type CollageLeaf = {
  key: string;
  hobby: Hobby;
  photo: string;
  rect: Rect;
};

/**
 * Builds the collage in two treemap passes: first each hobby gets its own
 * rectangle sized by how many photos it has, then that rectangle is
 * subdivided among just that hobby's photos. The result is every photo
 * tiling the page edge-to-edge while every hobby's photos stay clustered
 * into one contiguous block instead of being scattered around.
 */
function buildCollage(list: Hobby[]): { leaves: CollageLeaf[]; hobbyRects: Map<string, Rect> } {
  const withPhotos = list.filter((h) => h.photos.length > 0);
  const sorted = [...withPhotos].sort((a, b) => b.photos.length - a.photos.length);
  const outer = sliceTreemap(
    sorted.map((h) => ({ weight: h.photos.length, data: h })),
    { x: 0, y: 0, w: 100, h: 100 },
  );

  const leaves: CollageLeaf[] = [];
  const hobbyRects = new Map<string, Rect>();
  for (const { data: hobby, rect } of outer) {
    hobbyRects.set(hobby.slug, rect);
    const photoRects = sliceTreemap(
      hobby.photos.map((p) => ({ weight: 1, data: p })),
      rect,
    );
    photoRects.forEach(({ data: photo, rect: r }, i) => {
      leaves.push({ key: `${hobby.slug}-${i}`, hobby, photo, rect: r });
    });
  }
  return { leaves, hobbyRects };
}

function CollageTile({
  leaf,
  active,
  parallax,
  onEnter,
  onLeave,
}: {
  leaf: CollageLeaf;
  active: boolean;
  parallax: { x: number; y: number };
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group absolute overflow-hidden text-left transition-[filter,z-index] duration-200 ${
        active ? "z-10 brightness-110" : "brightness-90 hover:brightness-100"
      }`}
      style={{
        left: `${leaf.rect.x}%`,
        top: `${leaf.rect.y}%`,
        width: `${leaf.rect.w}%`,
        height: `${leaf.rect.h}%`,
        padding: "1px",
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-150 ease-out"
          style={{ transform: `scale(1.14) translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={leaf.photo} alt="" className="h-full w-full object-cover" />
        </div>
        <div
          className={`absolute inset-0 ring-1 ring-inset transition-all duration-200 ${
            active ? "bg-black/0 ring-[#4a9eff]/80" : "bg-black/10 ring-black/40"
          }`}
        />
      </div>
    </button>
  );
}

export function PersonalLifeSection() {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const { leaves, hobbyRects } = React.useMemo(() => buildCollage(hobbies), []);
  const active = hobbies.find((h) => h.slug === activeSlug) ?? null;
  const ActiveIcon = active ? hobbyIcons[active.icon] : null;
  const activeRect = activeSlug ? hobbyRects.get(activeSlug) ?? null : null;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 2, y: py * 2 });
  };

  // Float the detail card in whichever corner is farthest from the hobby
  // block being hovered (using that whole block, not the single sub-tile),
  // so it stays put while moving across one hobby's own mini-collage and
  // never sits on top of a picture.
  const cardCorner = activeRect
    ? {
        vertical: activeRect.y + activeRect.h / 2 < 50 ? "bottom" : "top",
        horizontal: activeRect.x + activeRect.w / 2 < 50 ? "right" : "left",
      }
    : { vertical: "bottom", horizontal: "right" };

  const cardPositionClass = `${cardCorner.vertical === "top" ? "top-4" : "bottom-4"} ${
    cardCorner.horizontal === "left" ? "left-4" : "right-4"
  }`;

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
            <span className="font-mono text-[12px] text-white/40">{leaves.length}</span>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative h-[480px] w-full sm:h-[620px]"
        >
          {leaves.map((leaf, i) => {
            const depth = ((i % 5) + 1) * 2;
            return (
              <CollageTile
                key={leaf.key}
                leaf={leaf}
                active={leaf.hobby.slug === activeSlug}
                parallax={{ x: tilt.x * depth, y: tilt.y * depth }}
                onEnter={() => setActiveSlug(leaf.hobby.slug)}
                onLeave={() => setActiveSlug(null)}
              />
            );
          })}

          <div
            className={`pointer-events-none absolute z-20 w-[min(320px,80%)] rounded-xl border border-white/15 bg-black/70 p-5 font-body-alt text-white shadow-2xl backdrop-blur-md transition-all duration-300 ${cardPositionClass} ${
              active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
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

        {/* Mobile: hover doesn't apply on touch, so list everything inline below */}
        <div className="mx-auto max-w-5xl px-6 py-8 sm:hidden">
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
