import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://keyconsulting-blog.com',
  integrations: [mdx(), sitemap(), tailwind(), metaTags(), robotsTxt()],
  output: 'server',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
