// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    ssr: {
      // Prevents Astro from trying to externalize CJS/ESM mixed modules during SSR
      noExternal: ['@splidejs/react-splide']
    },
    optimizeDeps: {
      // Forces Vite to properly pre-bundle the exports for the browser
      include: ['@splidejs/react-splide']
    }
  }
});