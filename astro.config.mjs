import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs',
    }),
    react()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
