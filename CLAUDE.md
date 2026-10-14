# CLAUDE.md

Personal site for Nrupesh Surya (https://nrupeshsurya.github.io), built with Astro 7 as a static site. It replaced the old Reverie/Jekyll site in October 2026.

## Commands

- `npm run dev`: dev server at http://localhost:4321
- `npm run build`: production build into `dist/`. Run it to check any change.
- `npx astro preview --port 4321`: serves `dist/`. In Astro 7 this runs in the background and returns at once; stop it with `npx astro preview stop`.

Requires Node >= 22.12. There is no Ruby or Jekyll any more.

## Where things live

- `src/data/experience.ts`: jobs, skills and education, rendered by `src/pages/about.astro`. Update this file when roles change; don't hard-code them in pages.
- `src/data/site.ts`: name, role, location, social links and Strava widget IDs.
- `src/content/blog/*.md`: blog posts. Frontmatter is `title`, `description`, `date`, `tags`, `draft`, validated in `src/content.config.ts`. Each post is served at `/blog/<filename>/`.
- `src/layouts/Base.astro`: the shared head, nav and footer. Colors are CSS variables in `src/styles/global.css`, with dark mode following the system setting.
- `public/`: static assets, including the avatar `me.jpg` and post images under `images/`.

## Gotchas

- `astro.config.mjs` has `redirects` from the old Jekyll URLs (`/RSA-Algorithm`, `/hello-world`). Keep them so old links keep working.
- Strava data comes from Strava's official iframe widgets, using the athlete ID and widget key in `site.ts`. No API token is involved. The `latest-rides` widget shows runs despite its name.
- In Astro templates, a space before an inline element on the next line gets dropped. Write `{' '}` at the end of the line.
- To check the layout at phone width, headless Chrome can't go below about 500px wide. Load the page in a 375px iframe instead.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and deploys to GitHub Pages on every push to `master`. The repo's Pages source must be set to "GitHub Actions"; if it's set to "Deploy from a branch", GitHub tries to build the site as Jekyll.

## Content notes

- The site owner runs and works as an SDE II at Amazon Business in Madrid; before that they were at Amazon Payments in Bengaluru.
- Never publish their phone number.
