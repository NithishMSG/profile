import { Award, Sparkles } from 'lucide-react'
import { profile } from '@/lib/profile'
import { Section } from '@/components/section'

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <p className="text-lg leading-relaxed text-pretty md:text-xl">{profile.objective}</p>
      <div className="mt-8">
        <h3 className="text-sm font-medium text-muted-foreground">Areas of interest</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="flex flex-col gap-6">
        {profile.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {project.title}
                <span className="font-normal text-muted-foreground"> — {project.subtitle}</span>
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{project.date}</p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-col gap-3 text-muted-foreground leading-relaxed">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {profile.skills.map((skill) => (
          <div key={skill.group} className="border-b border-border pb-5">
            <dt className="text-sm font-medium text-muted-foreground">{skill.group}</dt>
            <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-base font-medium">
              {skill.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < skill.items.length - 1 && (
                    <span className="ml-3 text-border" aria-hidden>
                      /
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <ol className="flex flex-col">
        {profile.education.map((item) => (
          <li
            key={item.title}
            className="grid gap-1 border-b border-border py-5 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.school}</p>
            </div>
            <div className="sm:text-right">
              <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              <p className="mt-1 text-sm font-medium text-accent">{item.score}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Achievements() {
  return (
    <Section id="certifications" index="05" title="Credentials">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Award className="size-4 text-accent" aria-hidden />
            Certifications
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {profile.certifications.map((cert) => (
              <li key={cert.name} className="rounded-xl border border-border bg-card p-4">
                <p className="font-medium leading-snug">{cert.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4 text-accent" aria-hidden />
            Co-curricular activities
          </h3>
          <ul className="mt-4 flex flex-col gap-4 leading-relaxed">
            {profile.activities.map((activity) => (
              <li key={activity} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
