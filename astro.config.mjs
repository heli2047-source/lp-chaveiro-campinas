import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuração para domínio próprio chaveirorodrigues24h.com.br
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site: 'https://chaveirorodrigues24h.com.br',
  base: base,
  output: 'static',
  integrations: [tailwind()],
});
