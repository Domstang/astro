import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind(), mdx()],
  output: "server",
  adapter: vercel({
    functionPerRoute: false,
  }),
});