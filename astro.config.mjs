import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    build: {
      sourcemap: true, // enable production source maps
    },
    css: {
      devSourcemap: true, // enable CSS source maps during development
    },
  },
});
