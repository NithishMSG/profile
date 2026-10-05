import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { About, Achievements, Education, Projects, Skills } from '@/components/profile-sections'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
