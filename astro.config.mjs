// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://pacto.mx',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), icon()]
});