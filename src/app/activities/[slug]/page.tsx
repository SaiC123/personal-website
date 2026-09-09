import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";

import { activities, profile } from "@/lib/content";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return {};
  return {
    title: `${activity.org} · ${profile.name}`,
    description: activity.summary,
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = activities.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();
  const activity = activities[index];

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

      <header className="border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <Link href="/" className="font-heading text-lg font-medium">
            {profile.shortName}
            <span className="text-brass">.</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All activities
        </Link>

        <div className="mt-6 grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-10">
          <div>
            <div className="aspect-square overflow-hidden rounded-xl border border-border bg-card p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activity.image}
                alt={activity.imageAlt}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {activity.period}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{activity.role}</p>
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} · {activity.place}
            </p>
            <h1 className="mt-2 text-3xl font-medium sm:text-4xl">{activity.org}</h1>

            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-foreground/90">
              {activity.summary}
            </p>

            <ul className="mt-6 grid gap-3">
              {activity.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brass" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {activity.skills.length > 0 && (
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Skills used
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activity.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 text-[12.5px] text-foreground/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activity.document && (
              <a
                href={activity.document.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-brass hover:bg-accent"
              >
                <FileText className="size-4" />
                {activity.document.label}
              </a>
            )}

            {activity.extraImage && (
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activity.extraImage}
                  alt={activity.extraImageAlt ?? ""}
                  className="w-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/#activities"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all activities
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Ask about this →
          </a>
        </div>
      </main>
    </div>
  );
}
