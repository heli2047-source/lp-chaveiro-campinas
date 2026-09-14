import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuração para domínio próprio chaveirorodrigues24h.com.br
export default defineConfig({
  site: 'https://chaveirorodrigues24h.com.br',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});
