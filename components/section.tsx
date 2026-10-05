export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-6 px-5 py-14 md:grid-cols-[200px_1fr] md:gap-10 md:py-20">
        <div>
          <p className="font-mono text-xs text-accent">{index}</p>
          <h2 id={`${id}-title`} className="mt-1 font-serif text-4xl tracking-tight">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
