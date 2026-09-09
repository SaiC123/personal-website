import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  GraduationCap,
  Mail,
  Music2,
  Sparkles,
  Swords,
} from "lucide-react";

import { GithubMark, LinkedinMark } from "@/components/icons";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import {
  activities,
  activityBackdrop,
  awards,
  certifications,
  facts,
  otherActivities,
  profile,
} from "@/lib/content";

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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#awards", label: "Awards" },
];

const otherActivityIcons: Record<string, typeof Swords> = {
  "Martial arts": Swords,
  Music: Music2,
  Scouting: Compass,
};

export default function Home() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, color-mix(in srgb, var(--brass) 12%, transparent), transparent 70%)",
        }}
      />

      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <a href="#top" className="font-heading text-lg font-medium">
            {profile.shortName}
            <span className="text-brass">.</span>
          </a>
          <nav className="hidden gap-7 sm:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border-b border-transparent pb-0.5 text-sm text-muted-foreground transition-colors hover:border-brass hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-border px-4 py-2 font-mono text-[13px] transition-colors hover:border-brass hover:bg-accent"
          >
            → get in touch
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex flex-col-reverse items-start gap-8 border-b border-border py-10 sm:flex-row sm:items-center sm:justify-between sm:py-14">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Personal site · Atlanta, GA
            </p>
            <h1 className="text-4xl leading-[1.05] font-medium sm:text-5xl">
              <HandwritingText
                text={profile.name}
                fontUrl="/fonts/caveat.ttf"
                className="text-foreground"
                height="clamp(2.6rem, 7vw, 4.1rem)"
                strokeWidth={1.4}
              />
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Current student, based in {profile.location}.
            </p>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-foreground/90">
              {profile.bio}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brass-strong"
              >
                <Mail className="size-4" />
                Say hello
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-border pb-0.5 text-sm text-muted-foreground transition-colors hover:border-teal hover:text-teal"
              >
                <GithubMark className="size-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-border pb-0.5 text-sm text-muted-foreground transition-colors hover:border-teal hover:text-teal"
              >
                <LinkedinMark className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative size-52 shrink-0 overflow-hidden rounded-full border border-border bg-card sm:size-64">
            <Image
              src="/images/headshot.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 256px, 208px"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="grid gap-8 border-b border-border py-10 sm:grid-cols-[1.3fr_1fr] sm:py-14">
          <div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              About
            </p>
            <h2 className="text-2xl font-medium">
              Interested in computer science and business.
            </h2>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
              {profile.focusNote} Between school and the ventures below, most of my time goes to the
              part where an idea has to turn into a plan someone else can act on: pricing, a pitch,
              a curriculum, a growth roadmap.
            </p>
          </div>
          <dl className="grid content-start gap-3">
            {facts.map((f) => (
              <div
                key={f.k}
                className="grid grid-cols-[100px_1fr] gap-3 border-b border-dashed border-border pb-3 text-sm last:border-none"
              >
                <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {f.k}
                </dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Activities */}
        <section
          id="activities"
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-border py-10 sm:py-14"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <div
              className="grid h-full grid-cols-4 sm:grid-cols-6"
              style={{ filter: "blur(22px) saturate(0.85)", transform: "scale(1.15)" }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activityBackdrop[i % activityBackdrop.length]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-background/85" />
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
            />
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="border-b border-border py-10 sm:py-14">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Awards &amp; recognition
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {awards.map((a) => (
              <div
                key={`${a.event}-${a.detail}`}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex h-9 shrink-0 items-center justify-center rounded-full border border-border bg-accent px-3 font-mono text-[12px] font-semibold text-brass-strong">
                  {a.place}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{a.event}</p>
                  {a.detail && <p className="text-sm text-muted-foreground">{a.detail}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-brass-strong">
                  <GraduationCap className="size-4" />
                </span>
                <p className="font-medium">Certifications</p>
              </div>
              <ul className="mt-4 grid gap-2.5 text-sm">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brass" />
                    <span className="text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-brass-strong">
                  <Sparkles className="size-4" />
                </span>
                <p className="font-medium">Also</p>
              </div>
              <ul className="mt-4 grid gap-3 text-sm">
                {otherActivities.map((o) => {
                  const Icon = otherActivityIcons[o.label] ?? Sparkles;
                  return (
                    <li key={o.label} className="flex items-center gap-2.5">
                      <Icon className="size-4 shrink-0 text-brass-strong" />
                      <span className="text-muted-foreground">{o.label}</span>
                      <span className="ml-auto font-medium text-foreground">{o.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid gap-8 py-10 sm:grid-cols-[1.2fr_1fr] sm:py-14">
          <div>
            <h2 className="text-3xl font-medium">Let&apos;s talk.</h2>
            <p className="mt-3 max-w-[46ch] text-muted-foreground">
              Email is the fastest way to reach me. I read everything and I&apos;ll get back to you
              within a couple of days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 border-b-2 border-brass font-mono text-lg"
            >
              {profile.email}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <ul className="grid content-start gap-3">
            {[
              { k: "Location", v: profile.location },
              { k: "GitHub", v: "@SaiC123", href: profile.github },
              { k: "LinkedIn", v: "/in/sai-chowdarapu", href: profile.linkedin },
            ].map((row, i) => (
              <li
                key={row.k}
                className={`flex items-baseline justify-between gap-3 pb-3 text-sm ${i !== 0 ? "border-t border-dashed border-border pt-3" : ""}`}
              >
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {row.k}
                </span>
                {row.href ? (
                  <a href={row.href} target="_blank" rel="noreferrer" className="hover:text-teal">
                    {row.v}
                  </a>
                ) : (
                  <span>{row.v}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 font-mono text-[12px] text-muted-foreground">
          <span>© 2026 {profile.name}</span>
          <span>Built with Next.js, shadcn/ui, and Tailwind CSS.</span>
        </div>
      </footer>
    </div>
  );
}
