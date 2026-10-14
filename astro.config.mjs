// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nrupeshsurya.github.io',
  integrations: [sitemap()],
  // Keep links to the old Jekyll post URLs working
  redirects: {
    '/RSA-Algorithm': '/blog/rsa-algorithm/',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
