# nrupeshsurya.github.io

My personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
```

- Blog posts live in `src/content/blog/` as Markdown.
- Experience and skills live in `src/data/experience.ts`. Links and Strava settings live in `src/data/site.ts`.
- Pushing to `master` deploys through `.github/workflows/deploy.yml`.
