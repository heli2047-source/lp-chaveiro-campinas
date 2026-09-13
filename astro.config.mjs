import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Suporte para GitHub Pages (subdiretório sem domínio próprio)
// No build do GitHub Actions ou com ASTRO_BASE definido, utiliza o nome do repositório
const base = process.env.ASTRO_BASE ?? (process.env.NODE_ENV === 'production' ? '/lp-chaveiro-campinas/' : '/');

export default defineConfig({
  site: 'https://heliezer.github.io',
  base: base,
  output: 'static',
  integrations: [tailwind()],
});
