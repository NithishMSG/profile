# Nithish Gopi — Personal Profile

My personal profile website: a single page with my background, education, projects, skills, certifications, and contact details.

**Software Engineer · Data Analytics Engineer · Salem, India**

## Contact

- **Email:** [nithishmsg@gmail.com](mailto:nithishmsg@gmail.com)
- **Phone:** [+91 7010530649](tel:+917010530649)
- **LinkedIn:** [linkedin.com/in/nithish-msg](https://www.linkedin.com/in/nithish-msg)

## About Me

I graduated in Computer Science and Design Engineering in 2026, and I'm looking for an entry-level role in software development or data analysis. I want to use my skills in Java, full-stack web development, and data analysis, and I enjoy finding useful insights in data.

## Page Sections

- **Hero:** my name, roles, location, and quick contact links
- **About:** my career objective
- **Education:** B.E. CSD (Sona College of Technology), Class XII, Class X
- **Projects:** *Through Their Eyes* (VR simulation platform) and *Sona Learn* (a platform for sharing academic knowledge)
- **Skills:** Java, Python, Power BI, Excel, MySQL, Unity, Git, SAP Fiori, and more
- **Certifications:** SAP Fiori Application Developer, Business Analysis, Power BI, SQL
- **Activities & Interests**
- **Contact:** one-click links for email, phone, and LinkedIn, plus copy-to-clipboard buttons

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Lucide](https://lucide.dev/) icons
- [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```
app/
  layout.tsx          # Fonts, metadata, and the root layout
  page.tsx            # Builds the profile page from the section components
  globals.css         # Theme tokens and Tailwind setup
components/
  site-header.tsx     # Sticky navigation
  hero.tsx            # Intro section
  section.tsx         # Shared section wrapper
  profile-sections.tsx# Education, projects, skills, certifications, activities
  contact.tsx         # Contact cards
  copy-button.tsx     # Copy-to-clipboard button
lib/
  profile.ts          # All profile content (edit this file to update the site)
```

## Updating Content

All the text on the site comes from **`lib/profile.ts`**. To change your details, projects, skills, or certifications, edit that file. You don't need to touch any components.

## Getting Started

You need Node.js 20 or newer and [pnpm](https://pnpm.io/).

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
pnpm build
pnpm start
```

## Deployment

The easiest way to deploy is on [Vercel](https://vercel.com/new): import this GitHub repository, and every push to `main` will deploy automatically.

## License

© Nithish Gopi. All rights reserved.
