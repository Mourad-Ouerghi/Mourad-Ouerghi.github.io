import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpine';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
})