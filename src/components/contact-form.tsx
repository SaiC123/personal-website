"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm({ email }: { email: string }) {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          required
          className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you want to talk about?"
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass"
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brass-strong"
      >
        Send
        <ArrowUpRight className="size-4" />
      </button>
      <p className="text-[12px] text-muted-foreground">
        This opens your email app with everything filled in - nothing sends from here directly.
      </p>
    </form>
  );
}
