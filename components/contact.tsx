import { ArrowUpRight, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'
import { profile } from '@/lib/profile'

export function Contact() {
  const { contact } = profile

  const rows = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'Phone',
      value: contact.phone,
      href: contact.phoneHref,
      icon: Phone,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: contact.linkedin,
      href: contact.linkedinHref,
      icon: UserRound,
      external: true,
    },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <p className="font-mono text-xs text-accent">06</p>
        <h2 id="contact-title" className="mt-1 font-serif text-5xl tracking-tight text-balance md:text-7xl">
          {"Let's work together."}
        </h2>
        <p className="mt-4 max-w-xl text-primary-foreground/70">
          Reach out for software development or data analyst opportunities.
        </p>

        <ul className="mt-10 divide-y divide-primary-foreground/15 rounded-2xl border border-primary-foreground/15 bg-card text-card-foreground">
          {rows.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label} className="flex items-center gap-4 p-4 md:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                <Icon className="size-4" aria-hidden />
              </span>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group min-w-0 flex-1"
              >
                <span className="block text-xs text-muted-foreground">{label}</span>
                <span className="flex items-center gap-1 truncate font-medium group-hover:text-accent">
                  <span className="truncate">{value}</span>
                  {external && <ArrowUpRight className="size-4 shrink-0" aria-hidden />}
                </span>
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
              <CopyButton value={external ? href : value} label={label} />
            </li>
          ))}
          <li className="flex items-center gap-4 p-4 md:p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
              <MapPin className="size-4" aria-hidden />
            </span>
            <div>
              <span className="block text-xs text-muted-foreground">Location</span>
              <span className="font-medium">{profile.location}</span>
            </div>
          </li>
        </ul>

        <footer className="mt-14 flex flex-wrap justify-between gap-2 text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="hover:text-primary-foreground">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
