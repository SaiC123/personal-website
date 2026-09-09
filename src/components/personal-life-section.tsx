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

function HobbyTile({
  hobby,
  active,
  onEnter,
  onLeave,
}: {
  hobby: Hobby;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = hobbyIcons[hobby.icon];
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const photo = hobby.photos[0];

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: px * -14, y: py * -14 });
  };

  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={() => {
        onLeave();
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={handleMove}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group relative aspect-[4/5] w-full overflow-hidden rounded-xl border text-left transition-colors duration-300 ${
        active
          ? "border-[#4a9eff]/70 shadow-[0_0_30px_-8px_rgba(74,158,255,0.55)]"
          : "border-white/10 hover:border-white/25"
      }`}
    >
      {photo ? (
        <div
          className="absolute inset-0 -z-10 transition-transform duration-200 ease-out"
          style={{ transform: `scale(1.15) translate(${offset.x}px, ${offset.y}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.06] to-transparent" />
      )}

      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-300 ${
          photo && active ? "opacity-70" : "opacity-90"
        }`}
      />

      {!photo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className={`size-9 transition-all duration-300 ${
              active ? "scale-110 text-[#4a9eff]" : "text-white/35"
            }`}
          />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
        <Icon className={`size-4 shrink-0 ${active ? "text-[#4a9eff]" : "text-white/70"}`} />
        <span className="font-display-alt text-[13px] font-bold tracking-wide text-white">
          {hobby.title}
        </span>
      </div>
    </button>
  );
}

export function PersonalLifeSection() {
  const [activeSlug, setActiveSlug] = React.useState(hobbies[0].slug);
  const active = hobbies.find((h) => h.slug === activeSlug) ?? hobbies[0];
  const ActiveIcon = hobbyIcons[active.icon];

  return (
    <section
      id="personal"
      className="relative left-1/2 w-screen -translate-x-1/2 border-b border-border"
    >
      <KineticGrid className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 font-body-alt text-white">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <p className="font-display-alt text-[12px] font-bold uppercase tracking-[0.2em] text-[#4a9eff]">
              Off the clock
            </p>
            <span className="font-mono text-[12px] text-white/40">{hobbies.length}</span>
          </div>

          <h2 className="mb-8 font-display-alt text-3xl font-bold tracking-tight sm:text-4xl">
            Personal life.
          </h2>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {hobbies.map((hobby) => (
                <HobbyTile
                  key={hobby.slug}
                  hobby={hobby}
                  active={hobby.slug === activeSlug}
                  onEnter={() => setActiveSlug(hobby.slug)}
                  onLeave={() => {}}
                />
              ))}
            </div>

            <div
              key={active.slug}
              className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/[0.03] p-6 duration-300 animate-in fade-in slide-in-from-right-2"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#4a9eff]/15 text-[#4a9eff]">
                <ActiveIcon className="size-5" />
              </span>
              <h3 className="font-display-alt text-xl font-bold text-white">{active.title}</h3>
              <p className="mt-1 text-[13px] text-white/50">{active.tagline}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-white/75">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </KineticGrid>
    </section>
  );
}
