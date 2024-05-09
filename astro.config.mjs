import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare'
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  outDir:'./dist',
  integrations: [tailwind(), vue()],
  output: 'hybrid',
  adapter: cloudflare({
    mode: "directory"
  })
});