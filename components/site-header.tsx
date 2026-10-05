import { profile } from '@/lib/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-medium" aria-label="Back to top">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#contact' ? '' : 'hidden md:block'}>
                <a
                  href={link.href}
                  className={
                    link.href === '#contact'
                      ? 'rounded-full bg-accent px-4 py-1.5 font-medium text-accent-foreground transition-opacity hover:opacity-90'
                      : 'rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
