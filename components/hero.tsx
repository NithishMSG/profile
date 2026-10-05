import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/profile'

export function Hero() {
  const { contact } = profile

  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-14 md:pt-24 md:pb-20">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
        <span className="size-2 rounded-full bg-accent" aria-hidden />
        Open to entry-level roles · Class of 2026
      </p>

      <h1 className="font-serif text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
        {profile.name}
      </h1>

      <p className="mt-5 text-xl text-muted-foreground md:text-2xl">
        {profile.roles[0]} <span className="font-serif italic text-accent">&amp;</span>{' '}
        {profile.roles[1]}
      </p>

      <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-4" aria-hidden />
        {profile.location}
      </p>

      <ul className="mt-10 flex flex-wrap gap-3" aria-label="Quick contact links">
        <li>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden />
            {contact.email}
          </a>
        </li>
        <li>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            <Phone className="size-4" aria-hidden />
            {contact.phone}
          </a>
        </li>
        <li>
          <a
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
