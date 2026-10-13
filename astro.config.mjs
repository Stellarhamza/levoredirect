import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://fortnite-cheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/fortnite-cheats/',
    '/cheats/lite/': '/products/fortnite-cheats/',
    '/cheats/pro/': '/products/fortnite-cheats/',
    '/cheats/elite/': '/products/fortnite-cheats/elite/',
    '/cheats/compare/': '/blog/fortnite-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/fortnite-cheats/',
    '/products/dota-2-cheats/elite/': '/products/fortnite-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/fortnite-cheats/utilities/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
