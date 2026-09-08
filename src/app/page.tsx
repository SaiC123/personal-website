import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

import { GithubMark, LinkedinMark } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import {
  activities,
  alsoInvolvedIn,
  awards,
  certifications,
  facts,
  otherActivities,
  profile,
  toolkit,
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
  { href: "#toolkit", label: "Toolkit" },
  { href: "#awards", label: "Awards" },
];

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
        <section id="activities" className="border-b border-border py-10 sm:py-14">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Featured activities
            </p>
            <span className="font-mono text-[12px] text-muted-foreground">
              {activities.length} of {activities.length + alsoInvolvedIn.length}
            </span>
          </div>

          <CoverflowCarousel
            slides={slides}
            showCaption
            showNavigation
            showPagination
            label="Featured activities"
          />

          <div className="mt-10">
            <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Also involved in
            </p>
            <div className="flex flex-wrap gap-2">
              {alsoInvolvedIn.map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full px-3 py-1 font-mono text-[12px] font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="border-b border-border py-10 sm:py-14">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Toolkit
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-medium">Technical</p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {toolkit.technical.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 bg-brass" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium">Business &amp; strategy</p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {toolkit.business.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 bg-brass" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium">Leadership</p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {toolkit.leadership.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 bg-brass" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="border-b border-border py-10 sm:py-14">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Awards &amp; recognition
          </p>
          <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr]">
            <ul className="grid gap-0">
              {awards.map((a, i) => (
                <li
                  key={`${a.event}-${a.detail}`}
                  className={`flex items-baseline gap-4 py-3 text-sm ${i !== 0 ? "border-t border-dashed border-border" : ""}`}
                >
                  <span className="w-16 shrink-0 font-mono text-[13px] text-brass-strong">{a.place}</span>
                  <span>
                    {a.event}
                    {a.detail && <span className="text-muted-foreground"> · {a.detail}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <div className="grid content-start gap-6">
              <div>
                <p className="mb-2 text-sm font-medium">Certifications</p>
                <ul className="grid gap-1.5 text-sm text-muted-foreground">
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium">Also</p>
                <ul className="grid gap-1.5 text-sm text-muted-foreground">
                  {otherActivities.map((o) => (
                    <li key={o.label} className="flex justify-between gap-3">
                      <span>{o.label}</span>
                      <span className="text-foreground/80">{o.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
