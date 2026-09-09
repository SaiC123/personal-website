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

type CollageItem = {
  key: string;
  hobby: Hobby;
  photo: string | null;
  span: "lg" | "md" | "sm";
};

// One collage tile per photo, so a hobby with several photos shows up
// several times. Hobbies without photos yet get a single icon tile. The
// span pattern repeats every 7 tiles so a handful of tiles read as
// "featured" without needing to hand-place every one.
const SPAN_PATTERN: CollageItem["span"][] = ["lg", "sm", "md", "sm", "sm", "md", "sm"];

function buildCollage(list: Hobby[]): CollageItem[] {
  const items: CollageItem[] = [];
  for (const hobby of list) {
    if (hobby.photos.length > 0) {
      hobby.photos.forEach((photo, i) => {
        items.push({ key: `${hobby.slug}-${i}`, hobby, photo, span: "sm" });
      });
    } else {
      items.push({ key: hobby.slug, hobby, photo: null, span: "sm" });
    }
  }
  return items.map((item, i) => ({ ...item, span: SPAN_PATTERN[i % SPAN_PATTERN.length] }));
}

const spanClasses: Record<CollageItem["span"], string> = {
  lg: "col-span-2 row-span-2",
  md: "col-span-2 row-span-1",
  sm: "col-span-1 row-span-1",
};

function CollageTile({
  item,
  active,
  parallax,
  onEnter,
  onLeave,
}: {
  item: CollageItem;
  active: boolean;
  parallax: { x: number; y: number };
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = hobbyIcons[item.hobby.icon];

  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group relative overflow-hidden rounded-lg border text-left transition-[border-color,box-shadow,transform] duration-300 ${spanClasses[item.span]} ${
        active
          ? "z-10 scale-[1.03] border-[#4a9eff]/70 shadow-[0_0_36px_-6px_rgba(74,158,255,0.6)]"
          : "border-white/10 hover:border-white/30"
      }`}
    >
      {item.photo ? (
        <div
          className="absolute inset-0 -z-10 transition-transform duration-150 ease-out"
          style={{ transform: `scale(1.12) translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.photo} alt="" className="h-full w-full object-cover" />
          <div
            className={`absolute inset-0 bg-black/25 transition-opacity duration-300 ${active ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-white/[0.07] to-transparent transition-transform duration-150 ease-out"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          <Icon className={`size-7 transition-colors duration-300 ${active ? "text-[#4a9eff]" : "text-white/30"}`} />
        </div>
      )}
    </button>
  );
}

export function PersonalLifeSection() {
  const [activeKey, setActiveKey] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const items = React.useMemo(() => buildCollage(hobbies), []);
  const active = items.find((i) => i.key === activeKey) ?? null;
  const ActiveIcon = active ? hobbyIcons[active.hobby.icon] : null;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 2, y: py * 2 });
  };

  return (
    <section
      id="personal"
      className="relative left-1/2 w-screen -translate-x-1/2 border-b border-border"
    >
      <KineticGrid className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-6 font-body-alt text-white">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <p className="font-display-alt text-[12px] font-bold uppercase tracking-[0.2em] text-[#4a9eff]">
              Off the clock
            </p>
            <span className="font-mono text-[12px] text-white/40">{items.length}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div
              ref={containerRef}
              onMouseMove={handleMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              className="grid auto-rows-[86px] grid-cols-4 gap-2 sm:auto-rows-[110px] sm:grid-cols-6"
            >
              {items.map((item, i) => {
                const depth = ((i % 5) + 1) * 2.2;
                return (
                  <CollageTile
                    key={item.key}
                    item={item}
                    active={item.key === activeKey}
                    parallax={{ x: tilt.x * depth, y: tilt.y * depth }}
                    onEnter={() => setActiveKey(item.key)}
                    onLeave={() => setActiveKey(null)}
                  />
                );
              })}
            </div>

            <div className="relative hidden lg:block">
              <div
                className={`sticky top-24 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ${
                  active ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"
                }`}
              >
                {active && ActiveIcon && (
                  <>
                    <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#4a9eff]/15 text-[#4a9eff]">
                      <ActiveIcon className="size-5" />
                    </span>
                    <h3 className="font-display-alt text-xl font-bold text-white">
                      {active.hobby.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-white/50">{active.hobby.tagline}</p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/75">
                      {active.hobby.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile: panel shown inline below the collage since hover doesn't apply on touch */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
            {hobbies.map((h) => {
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
